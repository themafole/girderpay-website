import { useState } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

function AuthCard({ mode }) {
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = mode === "signup";

  return (
    <div
      data-testid={`auth-card-${mode}`}
      className="glass-heavy rounded-2xl p-8 md:p-10 w-full max-w-md animate-pulse-glow"
    >
      <div className="text-center mb-8">
        <h3
          className="text-2xl font-medium text-[#F2F5F4] mb-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {isSignUp ? "Build Your Foundation" : "Access the Vault"}
        </h3>
        <p className="text-sm text-[#A1B3AE]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
          {isSignUp
            ? "Create your GirderPay account and start forging."
            : "Sign in to your GirderPay dashboard."}
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-5"
        data-testid={`auth-form-${mode}`}
      >
        {isSignUp && (
          <div className="space-y-2">
            <Label
              htmlFor={`${mode}-name`}
              className="text-xs text-[#A1B3AE] font-medium"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Full Name
            </Label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
              <Input
                id={`${mode}-name`}
                data-testid={`${mode}-name-input`}
                placeholder="Enter your name"
                className="pl-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label
            htmlFor={`${mode}-email`}
            className="text-xs text-[#A1B3AE] font-medium"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Email Address
          </Label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
            <Input
              id={`${mode}-email`}
              data-testid={`${mode}-email-input`}
              type="email"
              placeholder="you@company.com"
              className="pl-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor={`${mode}-password`}
            className="text-xs text-[#A1B3AE] font-medium"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Password
          </Label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
            <Input
              id={`${mode}-password`}
              data-testid={`${mode}-password-input`}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pl-10 pr-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            />
            <button
              type="button"
              data-testid={`${mode}-toggle-password`}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40 hover:text-[#A1B3AE] transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {!isSignUp && (
          <div className="flex items-center justify-end">
            <button
              type="button"
              data-testid="forgot-password-link"
              className="text-xs text-[#149d80] hover:text-[#18cca6] transition-colors"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Forgot password?
            </button>
          </div>
        )}

        <Button
          type="submit"
          data-testid={`${mode}-submit-btn`}
          className="w-full btn-teal rounded-xl h-11 text-sm font-semibold inline-flex items-center justify-center gap-2"
        >
          {isSignUp ? "Create Account" : "Sign In"} <ArrowRight size={16} />
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-[#A1B3AE]/60" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span className="text-[#149d80] hover:text-[#18cca6] cursor-pointer transition-colors">
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <main data-testid="auth-page" className="pt-20 md:pt-24 min-h-screen">
      <SEOHead
        title="Sign In"
        description="Access your GirderPay payment infrastructure dashboard. Enterprise-grade authentication for secure account access."
        keywords="sign in, sign up, GirderPay login, payment dashboard, secure access"
      />
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030605] via-[#08120F] to-[#030605]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#149d80]/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#149d80]/3 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              data-testid="auth-badge"
              variant="outline"
              className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
            >
              SECURE ACCESS
            </Badge>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl tracking-tighter font-light text-[#F2F5F4] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Enter the <span className="text-[#149d80]">vault</span>
            </h1>
            <p className="text-base text-[#A1B3AE] max-w-lg mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Access your payment infrastructure dashboard with enterprise-grade authentication.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mb-12" data-testid="auth-tab-switcher">
            <button
              data-testid="auth-tab-signin"
              onClick={() => setActiveTab("signin")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "signin"
                  ? "bg-[#149d80] text-[#030605]"
                  : "text-[#A1B3AE] hover:text-[#F2F5F4] glass"
              }`}
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Sign In
            </button>
            <button
              data-testid="auth-tab-signup"
              onClick={() => setActiveTab("signup")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "signup"
                  ? "bg-[#149d80] text-[#030605]"
                  : "text-[#A1B3AE] hover:text-[#F2F5F4] glass"
              }`}
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Sign Up
            </button>
          </div>

          {/* Auth Cards */}
          <div className="flex justify-center">
            {activeTab === "signin" ? (
              <AuthCard mode="signin" />
            ) : (
              <AuthCard mode="signup" />
            )}
          </div>

          {/* Trust Markers */}
          <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
            {["256-bit SSL", "SOC 2", "GDPR"].map((label) => (
              <span
                key={label}
                className="text-xs text-[#A1B3AE]/40 flex items-center gap-1.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Lock size={10} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
