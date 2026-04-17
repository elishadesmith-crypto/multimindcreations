import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@multimindcreations.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Address", value: "99, First Floor, M.B Road, Next to Misthaan Cafe, Khanpur, New Delhi, Delhi, 110062, India" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM IST" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Contact"
        description="Get in touch with Multimind Creations for GIS consulting, mapping services, and geospatial solutions. Contact us via email, phone, or visit our Hyderabad office."
        keywords="contact Multimind Creations, GIS consulting India, geospatial company contact, Hyderabad GIS company"
        canonical="https://multimindcreations.com/contact"
      />

      <section className="relative overflow-hidden py-24 bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Contact Us</span>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Let's Start a <span className="text-gradient">Conversation</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">Have a project in mind? We'd love to hear from you. Reach out and let's map your success together.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeading title="Get In Touch" description="Reach out through any of the channels below." center={false} />
              <div className="space-y-6">
                {contactInfo.map((c, i) => (
                  <motion.div key={c.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{c.label}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div {...fadeUp} className="rounded-xl border border-border bg-card p-8 lg:col-span-3">
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name *" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email Address *" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                </div>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-muted-foreground focus:border-primary focus:outline-none">
                  <option value="">Select a Service</option>
                  <option>GIS Mapping</option>
                  <option>Remote Sensing</option>
                  <option>Spatial Analytics</option>
                  <option>Data Engineering</option>
                  <option>Web GIS</option>
                  <option>Surveying & LiDAR</option>
                  <option>Other</option>
                </select>
                <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project *" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-border">
        <div className="h-80 bg-card dot-pattern flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-10 w-10 text-primary animate-pulse-glow" />
            <p className="mt-2 text-sm text-muted-foreground">New Delhi, India</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
