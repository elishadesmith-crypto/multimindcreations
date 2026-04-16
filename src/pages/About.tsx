import { motion } from "framer-motion";
import { Target, Eye, Users, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const values = [
  { icon: Target, title: "Precision", desc: "Accuracy in every dataset and deliverable we produce." },
  { icon: Eye, title: "Innovation", desc: "Continuously pushing boundaries with emerging geospatial technologies." },
  { icon: Users, title: "Collaboration", desc: "Working closely with clients to deliver tailored solutions." },
  { icon: Award, title: "Excellence", desc: "Committed to the highest standards of quality and performance." },
];

const milestones = [
  { year: "2012", event: "Founded in Hyderabad as a GIS consulting firm" },
  { year: "2015", event: "Expanded into remote sensing and aerial survey services" },
  { year: "2018", event: "Launched proprietary spatial analytics platform" },
  { year: "2020", event: "Crossed 300+ projects with global clientele" },
  { year: "2023", event: "AI-powered geospatial intelligence solutions launched" },
  { year: "2025", event: "Serving 150+ clients across 20+ countries" },
];

const About = () => (
  <Layout>
    <SEOHead
      title="About Us"
      description="Learn about Multimind Creations, a pioneering GIS company with 12+ years of experience in geospatial solutions, mapping, and spatial data engineering."
      keywords="about Multimind Creations, GIS company India, geospatial experts, mapping company"
      canonical="https://multimindcreations.com/about"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">About Us</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Pioneering <span className="text-gradient">Geospatial</span> Innovation Since 2012</h1>
          <p className="mt-6 text-lg text-muted-foreground">Multimind Creations is a leading GIS and geospatial solutions provider, delivering precision mapping, spatial analytics, and data engineering services to organizations worldwide.</p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:px-8">
        {[
          { title: "Our Mission", text: "To democratize geospatial intelligence by delivering innovative, accurate, and scalable GIS solutions that empower organizations to make data-driven decisions." },
          { title: "Our Vision", text: "To be the most trusted geospatial partner globally, leading the transformation of how the world understands and interacts with location data." },
        ].map((item, i) => (
          <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.15 }} className="rounded-xl border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-gradient">{item.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="border-y border-border bg-card py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Our Values" title="What Drives Us" description="Core principles that guide every project and partnership." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-background p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Our Journey" title="Key Milestones" />
        <div className="mx-auto max-w-2xl space-y-6">
          {milestones.map((m, i) => (
            <motion.div key={m.year} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                  <CheckCircle className="h-5 w-5" />
                </div>
                {i < milestones.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
              </div>
              <div className="pb-6">
                <span className="text-sm font-semibold text-primary">{m.year}</span>
                <p className="mt-1 text-muted-foreground">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
