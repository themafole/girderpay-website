import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Key, Code, TestTubeDiagonal, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

const steps = [
  {
    num: "01",
    icon: Key,
    title: "Obtain Your API Keys",
    description: "Register on the GirderPay dashboard to receive your sandbox and production API keys. Each key pair is forged with unique cryptographic identifiers.",
    code: `export GIRDER_API_KEY="sk_live_..."
export GIRDER_SECRET="whsec_..."`,
  },
  {
    num: "02",
    icon: Terminal,
    title: "Install the SDK",
    description: "Pull the GirderPay SDK into your project. Available for Node.js, Python, Ruby, Go, Java, and PHP. Built like load-bearing steel beams.",
    code: `npm install @girderpay/sdk
# or
pip install girderpay`,
  },
  {
    num: "03",
    icon: Code,
    title: "Initialize the Client",
    description: "Instantiate the GirderPay client with your API credentials. The foundation is laid — your payment infrastructure begins here.",
    code: `import GirderPay from '@girderpay/sdk';

const girder = new GirderPay({
  apiKey: process.env.GIRDER_API_KEY,
  environment: 'sandbox'
});`,
  },
  {
    num: "04",
    icon: Shield,
    title: "Configure Webhooks",
    description: "Set up webhook endpoints to receive real-time event notifications. Every transaction state change is reported through the girder network.",
    code: `girder.webhooks.create({
  url: 'https://api.your-app.com/webhooks',
  events: [
    'payment.completed',
    'payment.failed',
    'refund.initiated'
  ]
});`,
  },
  {
    num: "05",
    icon: TestTubeDiagonal,
    title: "Test in Sandbox",
    description: "Validate your integration against our sandbox environment. Use test card numbers and simulate edge cases. Stress-test the girders before going live.",
    code: `const testPayment = await girder.payments.create({
  amount: 1000,
  currency: 'usd',
  source: 'tok_visa_test',
  metadata: { order: 'test_001' }
});
// → { status: 'succeeded', id: 'pay_...' }`,
  },
  {
    num: "06",
    icon: Rocket,
    title: "Go Live",
    description: "Switch to production keys and start processing real transactions. Your payment infrastructure is now built on structural steel. Welcome to GirderPay.",
    code: `const girder = new GirderPay({
  apiKey: process.env.GIRDER_LIVE_KEY,
  environment: 'production'
});
// You're live. Steel-grade payments.`,
  },
];

export default function OnboardingPage() {
  return (
    <main data-testid="onboarding-page" className="pt-20 md:pt-24">
      <SEOHead
        title="Developer Onboarding"
        description="From zero to live payments in six steps. Integrate GirderPay's API with SDKs in 6 languages, sandbox testing, and comprehensive documentation."
        keywords="payment API integration, developer onboarding, SDK, sandbox, payment API docs, developer tools"
      />
      {/* Header */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#149d80]/5 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Badge
            data-testid="onboarding-badge"
            variant="outline"
            className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
          >
            DEVELOPER ONBOARDING
          </Badge>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl tracking-tighter font-light text-[#F2F5F4] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Six girders to
            <br />
            <span className="text-[#149d80]">production</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A1B3AE] max-w-2xl mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            From zero to live payments in six structural steps. Each one engineered for speed, security, and simplicity.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
          {/* Vertical Girder Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 girder-line hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  data-testid={`onboarding-step-${step.num}`}
                  className="relative md:pl-24 animate-slide-up"
                  style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
                >
                  {/* Step Number Circle */}
                  <div className="hidden md:flex absolute left-0 top-0 w-[50px] items-center justify-center">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#030605] border-2 border-[#149d80]/40 flex items-center justify-center">
                      <span
                        className="text-xs font-medium text-[#149d80]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="md:hidden w-8 h-8 rounded-lg bg-[#149d80]/10 border border-[#149d80]/20 flex items-center justify-center">
                          <span className="text-xs text-[#149d80]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{step.num}</span>
                        </div>
                        <Icon size={20} className="text-[#149d80]" />
                        <h3
                          className="text-xl font-medium text-[#F2F5F4]"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#A1B3AE] mb-5 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Code Block */}
                    <div className="border-t border-[#149d80]/10 bg-[#030605]/60 px-6 py-4 overflow-x-auto">
                      <pre>
                        <code
                          className="text-xs text-[#A1B3AE] leading-relaxed"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {step.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-24 animate-slide-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
            <p className="text-[#A1B3AE] mb-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Ready to lay the first girder?
            </p>
            <Link to="/auth">
              <Button
                data-testid="onboarding-cta"
                className="btn-teal rounded-full px-8 py-3 text-base h-auto inline-flex items-center gap-2"
              >
                Create Your Account <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
