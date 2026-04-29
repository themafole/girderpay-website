import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Platform: [
    { label: "Overview", path: "/" },
    { label: "Security", path: "/security" },
    { label: "Pricing", path: "/pricing" },
    { label: "Enterprise", path: "/contact" },
  ],
  Developers: [
    { label: "Onboarding", path: "/onboarding" },
    { label: "API Reference", path: "/onboarding" },
    { label: "SDKs", path: "/onboarding" },
    { label: "Sandbox", path: "/pricing" },
  ],
  Company: [
    { label: "About", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/contact" },
    { label: "Blog", path: "/" },
  ],
  Legal: [
    { label: "Privacy", path: "/" },
    { label: "Terms", path: "/" },
    { label: "Compliance", path: "/security" },
    { label: "SLA", path: "/pricing" },
  ],
};

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-gradient-to-b from-[#08120F] via-[#050A08] to-[#030605] border-t border-[#149d80]/10"
    >
      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="text-center mb-20">
          <p className="mono-label mb-4" data-testid="footer-cta-label">Ready to Build?</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-light text-[#F2F5F4] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Let's forge your payment
            <span className="text-[#149d80]"> infrastructure</span>
          </h2>
          <p className="text-[#A1B3AE] text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Start processing transactions with enterprise-grade reliability in minutes, not months.
          </p>
          <Link to="/auth">
            <Button
              data-testid="footer-cta-btn"
              className="btn-teal rounded-full px-8 py-3 text-base h-auto inline-flex items-center gap-2"
            >
              Start Building <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        <Separator className="bg-[#149d80]/10 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-sm font-semibold text-[#F2F5F4] mb-4 tracking-wide"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-sm text-[#A1B3AE] hover:text-[#149d80] transition-colors duration-300"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-[#149d80]/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#A1B3AE]/60"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} GirderPay. All rights reserved. Built on steel foundations.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#A1B3AE]/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              v2.4.0
            </span>
            <span className="w-2 h-2 rounded-full bg-[#149d80] animate-pulse-glow" />
            <span className="text-xs text-[#149d80]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
