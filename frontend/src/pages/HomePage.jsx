import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Code, Lock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030605] via-[#08120F] to-[#030605]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#149d80]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#149d80]/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <Badge
              data-testid="hero-badge"
              variant="outline"
              className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
            >
              ENTERPRISE GRADE INFRASTRUCTURE
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl tracking-tighter font-light text-[#F2F5F4] mb-6 leading-[0.95]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Steel-forged
              <br />
              payment
              <br />
              <span className="text-[#149d80] font-normal">foundations</span>
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#A1B3AE] max-w-lg mb-10"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Enterprise payment infrastructure built like structural steel. 
              Process billions with the reliability your business demands. 
              One API. Every payment method. Global scale.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/auth">
                <Button
                  data-testid="hero-cta-primary"
                  className="btn-teal rounded-full px-8 py-3 text-base h-auto inline-flex items-center gap-2"
                >
                  Start Building <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button
                  data-testid="hero-cta-secondary"
                  variant="ghost"
                  className="text-[#A1B3AE] hover:text-[#F2F5F4] hover:bg-[#149d80]/10 rounded-full px-6 py-3 h-auto text-base"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Floating Glass Card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="glass-heavy rounded-2xl p-8 w-[380px] animate-pulse-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#149d80]" />
                  <span className="mono-label">Transaction Processed</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1B3AE] text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Amount</span>
                    <span className="text-[#F2F5F4] text-lg font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>$12,847.00</span>
                  </div>
                  <div className="h-px bg-[#149d80]/20" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1B3AE] text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Status</span>
                    <span className="flex items-center gap-2 text-[#149d80] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#149d80]" />
                      Settled
                    </span>
                  </div>
                  <div className="h-px bg-[#149d80]/20" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1B3AE] text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Latency</span>
                    <span className="text-[#F2F5F4] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>23ms</span>
                  </div>
                  <div className="h-px bg-[#149d80]/20" />
                  <div
                    className="mt-4 p-3 rounded-lg bg-[#149d80]/5 border border-[#149d80]/10"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span className="text-xs text-[#A1B3AE]/60">txn_</span>
                    <span className="text-xs text-[#149d80]">7f8a2b4c9d1e</span>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div
                className="absolute -top-6 -right-8 glass rounded-xl px-4 py-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-[#149d80]" />
                  <span className="text-xs text-[#F2F5F4]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>PCI DSS L1</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-[#149d80]" />
                  <span className="text-xs text-[#F2F5F4]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>160+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats Section ── */
const stats = [
  { value: "$691B+", label: "Transactions Processed", sub: "Annual volume" },
  { value: "260+", label: "Fraud Detectors", sub: "Active screening" },
  { value: "160+", label: "Countries & Territories", sub: "Global reach" },
  { value: "99.99%", label: "Uptime SLA", sub: "Steel-grade reliability" },
];

function StatsSection() {
  return (
    <section data-testid="stats-section" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-testid={`stat-card-${i}`}
              className="glass-card rounded-2xl p-6 md:p-8 text-center animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <p
                className="text-3xl md:text-4xl font-light text-[#149d80] mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-[#F2F5F4] mb-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                {stat.label}
              </p>
              <p className="text-xs text-[#A1B3AE]/60" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features Section ── */
const features = [
  {
    icon: Zap,
    title: "Lightning Settlement",
    description: "Real-time payment processing with sub-50ms latency. Built on load-bearing infrastructure that never buckles under pressure.",
  },
  {
    icon: Shield,
    title: "Vault-Grade Security",
    description: "260+ fraud detectors, PCI DSS Level 1 compliance, and tokenized data storage. Your transactions are locked in steel.",
  },
  {
    icon: Globe,
    title: "Global Girder Network",
    description: "Accept payments in 160+ countries with 135+ currencies. One integration, every market. Structural coverage worldwide.",
  },
  {
    icon: Code,
    title: "Developer-First APIs",
    description: "RESTful APIs with SDKs in 6 languages. Comprehensive sandbox. Ship integrations in hours, not weeks.",
  },
  {
    icon: Lock,
    title: "Compliance Framework",
    description: "SOC 2 Type II, PSD2, GDPR, and Strong Customer Authentication built into every transaction. Regulatory steel reinforcement.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards, granular reporting, and predictive insights. See every transaction flowing through your infrastructure.",
  },
];

function FeaturesSection() {
  return (
    <section data-testid="features-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="mono-label mb-4">Core Infrastructure</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-light text-[#F2F5F4] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Built on structural <span className="text-[#149d80]">steel</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1B3AE] max-w-2xl mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Every component engineered for enterprise load. From the first API call to the billionth transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-testid={`feature-card-${i}`}
                className="glass-card rounded-2xl p-8 animate-slide-up group"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#149d80]/10 border border-[#149d80]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#149d80]/20 group-hover:border-[#149d80]/40">
                  <Icon size={22} className="text-[#149d80]" />
                </div>
                <h3
                  className="text-xl font-medium text-[#F2F5F4] mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A1B3AE]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Trusted By Section ── */
const trustedNames = ["Accenture", "Deloitte", "Stripe", "Shopify", "Klarna"];

function TrustedBySection() {
  return (
    <section data-testid="trusted-section" className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="mono-label mb-3">Trusted By</p>
          <p className="text-sm text-[#A1B3AE]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Powering secure transactions for industry leaders worldwide
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustedNames.map((name) => (
            <div
              key={name}
              data-testid={`trusted-logo-${name.toLowerCase()}`}
              className="text-[#A1B3AE]/30 text-xl md:text-2xl font-light tracking-wide transition-colors duration-300 hover:text-[#A1B3AE]/60"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Code Preview Section ── */
function CodePreviewSection() {
  return (
    <section data-testid="code-preview-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mono-label mb-4">For Developers</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-light text-[#F2F5F4] mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              One API call.
              <br />
              <span className="text-[#149d80]">Every payment.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A1B3AE] mb-8 max-w-lg" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Integrate with a single, unified endpoint. Accept cards, wallets, bank transfers, 
              and alternative payment methods. Our SDKs handle the complexity so you can 
              focus on building.
            </p>
            <Link to="/onboarding">
              <Button
                data-testid="code-preview-cta"
                className="btn-teal rounded-full px-6 py-2.5 h-auto inline-flex items-center gap-2 text-sm"
              >
                Explore the API <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Code Block */}
          <div className="glass-heavy rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-[#149d80]/10">
              <div className="w-3 h-3 rounded-full bg-[#A1B3AE]/20" />
              <div className="w-3 h-3 rounded-full bg-[#A1B3AE]/20" />
              <div className="w-3 h-3 rounded-full bg-[#A1B3AE]/20" />
              <span className="ml-3 text-xs text-[#A1B3AE]/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                payment.js
              </span>
            </div>
            <pre className="p-6 overflow-x-auto" data-testid="code-block">
              <code className="text-sm leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-[#A1B3AE]/50">{"// Initialize GirderPay"}</span>{"\n"}
                <span className="text-[#149d80]">const</span>{" "}
                <span className="text-[#F2F5F4]">girder</span>{" "}
                <span className="text-[#A1B3AE]">=</span>{" "}
                <span className="text-[#149d80]">new</span>{" "}
                <span className="text-[#18cca6]">GirderPay</span>
                <span className="text-[#A1B3AE]">(</span>
                <span className="text-[#A1B3AE]/60">api_key</span>
                <span className="text-[#A1B3AE]">);</span>{"\n\n"}
                <span className="text-[#A1B3AE]/50">{"// Create a payment"}</span>{"\n"}
                <span className="text-[#149d80]">const</span>{" "}
                <span className="text-[#F2F5F4]">payment</span>{" "}
                <span className="text-[#A1B3AE]">=</span>{" "}
                <span className="text-[#149d80]">await</span>{" "}
                <span className="text-[#F2F5F4]">girder</span>
                <span className="text-[#A1B3AE]">.</span>
                <span className="text-[#18cca6]">payments</span>
                <span className="text-[#A1B3AE]">.</span>
                <span className="text-[#18cca6]">create</span>
                <span className="text-[#A1B3AE]">({"{"}</span>{"\n"}
                {"  "}
                <span className="text-[#A1B3AE]/60">amount</span>
                <span className="text-[#A1B3AE]">:</span>{" "}
                <span className="text-[#149d80]">4999</span>
                <span className="text-[#A1B3AE]">,</span>{"\n"}
                {"  "}
                <span className="text-[#A1B3AE]/60">currency</span>
                <span className="text-[#A1B3AE]">:</span>{" "}
                <span className="text-[#18cca6]">"usd"</span>
                <span className="text-[#A1B3AE]">,</span>{"\n"}
                {"  "}
                <span className="text-[#A1B3AE]/60">method</span>
                <span className="text-[#A1B3AE]">:</span>{" "}
                <span className="text-[#18cca6]">"card"</span>
                <span className="text-[#A1B3AE]">,</span>{"\n"}
                <span className="text-[#A1B3AE]">{"}"});</span>{"\n\n"}
                <span className="text-[#A1B3AE]/50">{"// payment.status → 'settled'"}</span>{"\n"}
                <span className="text-[#A1B3AE]/50">{"// payment.latency → '23ms'"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Home Page ── */
export default function HomePage() {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CodePreviewSection />
      <TrustedBySection />
    </main>
  );
}
