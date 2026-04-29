import { Link } from "react-router-dom";
import {
  Shield, Lock, Eye, Fingerprint, ServerCrash, FileCheck,
  AlertTriangle, Database, KeyRound, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const vaultFeatures = [
  {
    icon: Shield,
    title: "PCI DSS Level 1",
    description: "The highest level of payment card security certification. Every transaction passes through our hardened steel infrastructure.",
    stat: "Level 1",
  },
  {
    icon: Fingerprint,
    title: "260+ Fraud Detectors",
    description: "Biometrics, IP geolocation, device fingerprinting, and behavioral analysis. A mesh of overlapping security girders.",
    stat: "260+",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption at rest and TLS 1.3 in transit. Sensitive data never touches your servers in plaintext.",
    stat: "AES-256",
  },
  {
    icon: Eye,
    title: "Real-Time Threat Monitoring",
    description: "24/7 SOC team with automated threat detection. Anomalies are flagged and quarantined in milliseconds.",
    stat: "24/7",
  },
  {
    icon: Database,
    title: "Tokenized Vault Storage",
    description: "Card data replaced with unique tokens stored in Visa-grade data centers. Zero PAN exposure across your systems.",
    stat: "Zero PAN",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II Certified",
    description: "Independent audits verify our security controls continuously. Trust built on verified steel, not promises.",
    stat: "SOC 2",
  },
];

const complianceItems = [
  { label: "PCI DSS L1", icon: Shield },
  { label: "SOC 2 Type II", icon: FileCheck },
  { label: "GDPR", icon: Lock },
  { label: "PSD2 / SCA", icon: KeyRound },
  { label: "ISO 27001", icon: Database },
  { label: "3D Secure 2", icon: Fingerprint },
];

const threatStats = [
  { value: "50ms", label: "Threat Detection" },
  { value: "99.7%", label: "Fraud Prevention Rate" },
  { value: "<0.01%", label: "False Positive Rate" },
  { value: "2.3B+", label: "Transactions Scanned" },
];

export default function SecurityVaultPage() {
  return (
    <main data-testid="security-vault-page" className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605] via-[#08120F] to-[#030605]" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#149d80]/3 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Badge
            data-testid="security-badge"
            variant="outline"
            className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
          >
            SECURITY VAULT
          </Badge>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl tracking-tighter font-light text-[#F2F5F4] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Forged in the
            <br />
            <span className="text-[#149d80]">vault</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A1B3AE] max-w-2xl mx-auto mb-10" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Enterprise-grade security built into every layer. Your data is protected by 
            structural steel — not band-aid patches.
          </p>

          {/* Threat Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {threatStats.map((stat, i) => (
              <div
                key={stat.label}
                data-testid={`threat-stat-${i}`}
                className="glass rounded-xl p-4 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <p
                  className="text-2xl font-light text-[#149d80]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-[#A1B3AE]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="mono-label mb-4">Defense Architecture</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-light text-[#F2F5F4]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Multi-layered <span className="text-[#149d80]">protection</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaultFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  data-testid={`vault-feature-${i}`}
                  className="glass-card rounded-2xl p-8 group animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#149d80]/10 border border-[#149d80]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#149d80]/20">
                      <Icon size={22} className="text-[#149d80]" />
                    </div>
                    <span
                      className="text-2xl font-light text-[#149d80]/40 group-hover:text-[#149d80]/70 transition-colors duration-300"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {feature.stat}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-medium text-[#F2F5F4] mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#A1B3AE] leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="py-16 md:py-20" data-testid="compliance-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="glass-heavy rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="mono-label mb-3">Compliance Framework</p>
              <h3
                className="text-xl sm:text-2xl font-medium text-[#F2F5F4]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Regulatory steel reinforcement
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {complianceItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    data-testid={`compliance-item-${i}`}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#149d80]/5 border border-[#149d80]/10 transition-all duration-300 hover:border-[#149d80]/30 hover:bg-[#149d80]/10"
                  >
                    <Icon size={24} className="text-[#149d80]" />
                    <span className="text-xs font-medium text-[#F2F5F4] text-center" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Alert / Warning Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center animate-border-pulse">
            <AlertTriangle size={40} className="text-[#149d80] mx-auto mb-6" />
            <h3
              className="text-xl sm:text-2xl font-medium text-[#F2F5F4] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Security is not an afterthought
            </h3>
            <p className="text-sm sm:text-base text-[#A1B3AE] max-w-xl mx-auto mb-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              At GirderPay, security is the first girder we lay. Every feature, every API endpoint, 
              every line of code is built with defense in depth. If you discover a vulnerability, 
              our bounty program rewards responsible disclosure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  data-testid="security-contact-btn"
                  className="btn-teal rounded-full px-6 py-2.5 h-auto inline-flex items-center gap-2 text-sm"
                >
                  Contact Security Team <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button
                  data-testid="security-docs-btn"
                  variant="ghost"
                  className="text-[#A1B3AE] hover:text-[#F2F5F4] hover:bg-[#149d80]/10 rounded-full px-6 py-2.5 h-auto text-sm"
                >
                  Security Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ServerCrash,
                title: "99.99% Uptime",
                desc: "Multi-region failover with zero-downtime deployments. Your payment rails never go dark.",
              },
              {
                icon: Shield,
                title: "Bug Bounty Program",
                desc: "Up to $50,000 for critical vulnerabilities. We partner with researchers to keep the vault sealed.",
              },
              {
                icon: Lock,
                title: "Incident Response",
                desc: "< 15 minute response SLA for P0 incidents. Dedicated security team on-call 24/7/365.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-testid={`incident-card-${i}`}
                  className="glass-card rounded-2xl p-8 text-center animate-slide-up"
                  style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
                >
                  <Icon size={28} className="text-[#149d80] mx-auto mb-4" />
                  <h4
                    className="text-lg font-medium text-[#F2F5F4] mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#A1B3AE]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
