import { useState } from "react";
import { Mail, Phone, Building2, MessageSquare, ArrowRight, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "enterprise@girderpay.com",
    sub: "Response within 2 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) 447-3379",
    sub: "Mon-Fri, 8am-8pm EST",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "New York, NY",
    sub: "Financial District",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "24/7 Enterprise",
    sub: "Priority SLA available",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main data-testid="contact-page" className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605] via-[#08120F] to-[#030605]" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#149d80]/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Badge
              data-testid="contact-badge"
              variant="outline"
              className="mb-6 border-[#149d80]/30 text-[#149d80] bg-[#149d80]/5 px-4 py-1.5 text-xs rounded-full"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
            >
              GET IN TOUCH
            </Badge>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl tracking-tighter font-light text-[#F2F5F4] mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Let's forge
              <br />
              <span className="text-[#149d80]">together</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A1B3AE] max-w-2xl mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Whether you're scaling to millions of transactions or just laying the first girder, 
              our team is ready to help you build.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-heavy rounded-2xl p-8 md:p-10" data-testid="contact-form-container">
                <h3
                  className="text-xl font-medium text-[#F2F5F4] mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-name"
                        className="text-xs text-[#A1B3AE] font-medium"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        Full Name
                      </Label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
                        <Input
                          id="contact-name"
                          data-testid="contact-name-input"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="pl-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="text-xs text-[#A1B3AE] font-medium"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
                        <Input
                          id="contact-email"
                          data-testid="contact-email-input"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="pl-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-company"
                      className="text-xs text-[#A1B3AE] font-medium"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      Company
                    </Label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1B3AE]/40" />
                      <Input
                        id="contact-company"
                        data-testid="contact-company-input"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="pl-10 bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-[#149d80]/20 h-11 rounded-xl"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-message"
                      className="text-xs text-[#A1B3AE] font-medium"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      Message
                    </Label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3 top-4 text-[#A1B3AE]/40" />
                      <textarea
                        id="contact-message"
                        data-testid="contact-message-input"
                        rows={5}
                        placeholder="Tell us about your payment infrastructure needs..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="flex w-full rounded-xl border bg-[#030605]/60 border-[#149d80]/20 text-[#F2F5F4] placeholder:text-[#A1B3AE]/30 focus:border-[#149d80]/50 focus:ring-1 focus:ring-[#149d80]/20 focus:outline-none pl-10 pr-4 py-3 text-sm resize-none transition-colors"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    data-testid="contact-submit-btn"
                    className="btn-teal rounded-xl px-8 py-3 h-auto text-sm font-semibold inline-flex items-center gap-2"
                  >
                    Send Message <ArrowRight size={16} />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    data-testid={`contact-info-${i}`}
                    className="glass-card rounded-xl p-6 animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#149d80]/10 border border-[#149d80]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#149d80]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#A1B3AE]/60 mb-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          {info.label}
                        </p>
                        <p className="text-sm font-medium text-[#F2F5F4]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          {info.value}
                        </p>
                        <p className="text-xs text-[#A1B3AE]/40 mt-0.5" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          {info.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Office Hours Card */}
              <div className="glass-heavy rounded-xl p-6 mt-4" data-testid="office-hours-card">
                <p className="mono-label mb-3">Enterprise Support</p>
                <p className="text-sm text-[#A1B3AE] leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Need dedicated support? Our enterprise plans include a named account manager 
                  and priority SLA with {'<'}15 minute response times.
                </p>
                <Button
                  data-testid="enterprise-support-btn"
                  variant="ghost"
                  className="mt-4 text-[#149d80] hover:text-[#18cca6] hover:bg-[#149d80]/10 text-xs px-0"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  Learn about Enterprise plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
