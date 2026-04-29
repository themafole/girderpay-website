import { Link } from "react-router-dom";
import { ArrowRight, Check, Zap, Building2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

const tiers = [
  {
    name: "Construction",
    subtitle: "The Sandbox",
    icon: HardHat,
    price: "$0",
    priceSuffix: "/mo",
    description: "Lay the groundwork. Full API access in a risk-free sandbox environment — no commitments, no costs.",
    features: [
      "Full API access",
      "50 monthly test transactions",
      "Community support",
      "Sandbox environment",
      "Core documentation",
      "Single API key",
    ],
    cta: "Start Building",
    ctaLink: "/auth",
    highlighted: false,
  },
  {
    name: "Framework",
    subtitle: "The Growth Plan",
    icon: Zap,
    price: "1.2% + $0.20",
    priceSuffix: "per txn",
    description: "Your structural framework for scale. Unlimited live transactions with enterprise-grade monitoring built in.",
    features: [
      "Unlimited live transactions",
      "Priority support (< 4hr SLA)",
      "24/7 real-time monitoring",
      "Advanced fraud detection",
      "Webhook management",
      "Multi-currency support",
      "Analytics dashboard",
      "99.95% uptime SLA",
    ],
    cta: "Select Framework",
    ctaLink: "/auth",
    highlighted: true,
  },
  {
    name: "Infrastructure",
    subtitle: "Enterprise",
    icon: Building2,
    price: "Custom",
    priceSuffix: "volume pricing",
    description: "Purpose-built payment infrastructure for enterprises processing at scale. Steel-grade everything.",
    features: [
      "Custom volume pricing",
      "Dedicated account manager",
      "Custom SLA (up to 99.99%)",
      "White-glove integration support",
      "On-premise deployment option",
      "Advanced compliance tooling",
      "Custom fraud rules engine",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    highlighted: false,
  },
];

function TierCard({ tier, index }) {
  const Icon = tier.icon;

  return (
    <div
      data-testid={`pricing-tier-${index}`}
      className={`relative rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 ${
        tier.highlighted
          ? "glass-heavy border-2 border-[#149d80]/60 shadow-[0_0_50px_rgba(20,157,128,0.15)]"
          : "glass-card"
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge
            data-testid="pricing-recommended-badge"
            className="bg-[#149d80] text-[#030605] border-0 px-4 py-1 text-xs font-semibold rounded-full"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}
          >
            RECOMMENDED
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              tier.highlighted
                ? "bg-[#149d80]/20 border border-[#149d80]/40"
                : "bg-[#149d80]/10 border border-[#149d80]/20"
            }`}
          >
            <Icon size={20} className="text-[#149d80]" />
          </div>
          <div>
            <h3
              className="text-lg font-medium text-[#F2F5F4]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {tier.name}
            </h3>
            <p
              className="text-xs text-[#149d80]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
            >
              {tier.subtitle.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-4xl md:text-5xl font-light text-[#F2F5F4]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {tier.price}
          </span>
          <span
            className="text-sm text-[#A1B3AE]"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            {tier.priceSuffix}
          </span>
        </div>
        <p
          className="text-sm text-[#A1B3AE] mt-3 leading-relaxed"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          {tier.description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${
                tier.highlighted ? "text-[#149d80]" : "text-[#149d80]/60"
              }`}
            />
            <span
              className="text-sm text-[#A1B3AE]"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to={tier.ctaLink}>
        <Button
          data-testid={`pricing-cta-${index}`}
          className={`w-full rounded-xl h-12 text-sm font-semibold inline-flex items-center justify-center gap-2 ${
            tier.highlighted
              ? "btn-teal"
              : "bg-transparent border border-[#149d80]/30 text-[#F2F5F4] hover:bg-[#149d80]/10 hover:border-[#149d80]/50 transition-all duration-300"
          }`}
        >
          {tier.cta} <ArrowRight size={16} />
        </Button>
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main data-testid="pricing-page" className="pt-20 md:pt-24 min-h-screen">
      <SEOHead
        title="Pricing"
        description="Transparent, simple pricing for GirderPay payment infrastructure. From free sandbox to enterprise-grade custom plans."
        keywords="payment pricing, fintech pricing, API pricing, transaction fees, enterprise payments"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605] via-[#08120F] to-[#030605]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#149d80]/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Badge
            data-testid="pricing-badge"
            variant="outline"
            className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
          >
            TRANSPARENCY GRID
          </Badge>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl tracking-tighter font-light text-[#F2F5F4] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Costs clear as
            <br />
            <span className="text-[#149d80]">structural glass</span>
          </h1>
          <p
            className="text-base sm:text-lg text-[#A1B3AE] max-w-2xl mx-auto"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Trust is built through clear, unhidden costs. No surprise fees, no hidden charges.
            Pick the plan that fits the scale of your infrastructure.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier, i) => (
              <TierCard key={tier.name} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Strip */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="mono-label mb-4">Common Questions</p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight font-light text-[#F2F5F4]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Built on <span className="text-[#149d80]">trust</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Are there any hidden fees?",
                a: "None. What you see is what you pay. The transaction fee includes all processing, fraud screening, and currency conversion. No setup fees, no monthly minimums on Framework.",
              },
              {
                q: "Can I switch plans at any time?",
                a: "Absolutely. Upgrade from Construction to Framework instantly. Moving to Infrastructure involves a brief onboarding call with our solutions team to tailor the plan to your volume.",
              },
              {
                q: "What payment methods are included?",
                a: "All plans include cards (Visa, Mastercard, Amex), digital wallets (Apple Pay, Google Pay), and bank transfers. Framework and Infrastructure add local payment methods across 160+ countries.",
              },
              {
                q: "Is the sandbox really free forever?",
                a: "Yes. The Construction tier is free with no time limit. Build and test with 50 monthly test transactions. When you're ready to go live, simply upgrade to Framework.",
              },
            ].map((faq, i) => (
              <div
                key={faq.q}
                data-testid={`pricing-faq-${i}`}
                className="glass-card rounded-xl p-6 md:p-8"
              >
                <h4
                  className="text-base font-medium text-[#F2F5F4] mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {faq.q}
                </h4>
                <p
                  className="text-sm text-[#A1B3AE] leading-relaxed"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="glass-heavy rounded-2xl p-8 md:p-12 text-center animate-border-pulse">
            <p className="mono-label mb-4">ENTERPRISE</p>
            <h3
              className="text-xl sm:text-2xl font-medium text-[#F2F5F4] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Processing over 100K transactions/month?
            </h3>
            <p
              className="text-sm text-[#A1B3AE] max-w-xl mx-auto mb-8"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Our Infrastructure plan offers custom volume pricing, dedicated support,
              and white-glove integration. Let's architect your payment foundation together.
            </p>
            <Link to="/contact">
              <Button
                data-testid="pricing-enterprise-cta"
                className="btn-teal rounded-full px-8 py-3 text-base h-auto inline-flex items-center gap-2"
              >
                Talk to Sales <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
