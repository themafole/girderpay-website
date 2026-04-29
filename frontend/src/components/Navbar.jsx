import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_975ab3f7-c0ed-49e5-a928-dadab99d0afa/artifacts/gi71ymg6_GIRDERPAY_WHITE_BACKGROUND_LOGO.png";

const navLinks = [
  { label: "Platform", path: "/" },
  { label: "Developers", path: "/onboarding" },
  { label: "Security", path: "/security" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030605]/80 border-b border-[#149d80]/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2 shrink-0">
            <span
              className="text-xl md:text-2xl font-medium tracking-tight text-[#149d80]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              girder<span className="border-b-2 border-[#149d80]">pay</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-[#149d80]"
                    : "text-[#A1B3AE] hover:text-[#F2F5F4]"
                }`}
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button
                variant="ghost"
                data-testid="nav-sign-in-btn"
                className="text-[#A1B3AE] hover:text-[#F2F5F4] hover:bg-[#149d80]/10 text-sm"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                data-testid="nav-sign-up-btn"
                className="btn-teal rounded-full px-6 text-sm font-semibold"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-[#A1B3AE] hover:text-[#F2F5F4] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden glass-heavy animate-fade-in"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className={`block text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#149d80]"
                    : "text-[#A1B3AE]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-[#149d80]/20">
              <Link to="/auth" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="ghost"
                  data-testid="mobile-sign-in-btn"
                  className="w-full text-[#A1B3AE] hover:text-[#F2F5F4] justify-start"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/auth" onClick={() => setMobileOpen(false)}>
                <Button
                  data-testid="mobile-sign-up-btn"
                  className="w-full btn-teal rounded-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
