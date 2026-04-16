import { motion } from "framer-motion";
import { Building2, TreePine, Zap, Truck, Heart, GraduationCap, Landmark, Pickaxe } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const industries = [
  { icon: Building2, title: "Urban Development & Smart Cities", desc: "GIS solutions for urban planning, land use management, zoning, and smart city infrastructure development." },
  { icon: TreePine, title: "Environment & Forestry", desc: "Environmental impact assessments, forest cover monitoring, biodiversity mapping, and carbon credit analysis." },
  { icon: Zap, title: "Energy & Utilities", desc: "Power grid mapping, renewable energy site selection, pipeline routing, and utility asset management." },
  { icon: Truck, title: "Transportation & Logistics", desc: "Route optimization, traffic analysis, fleet management, and transportation infrastructure planning." },
  { icon: Heart, title: "Healthcare & Public Health", desc: "Disease mapping, health facility accessibility analysis, and epidemiological spatial modeling." },
  { icon: GraduationCap, title: "Education & Research", desc: "Academic research support, campus mapping, training programs, and GIS education initiatives." },
  { icon: Landmark, title: "Government & Defense", desc: "National mapping programs, border surveillance, land records digitization, and strategic defense planning." },
  { icon: Pickaxe, title: "Mining & Natural Resources", desc: "Mineral exploration mapping, mine planning, environmental compliance, and resource estimation." },
];

const Industries = () => (
  <Layout>
    <SEOHead
      title="Industries"
      description="Multimind Creations serves diverse industries including urban development, environment, energy, healthcare, defense, mining, and transportation with specialized GIS solutions."
      keywords="GIS industries, geospatial industry solutions, smart city GIS, environmental GIS, defense GIS, mining GIS"
      canonical="https://multimindcreations.com/industries"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Industries</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Serving <span className="text-gradient">Diverse Industries</span> Worldwide</h1>
          <p className="mt-6 text-lg text-muted-foreground">Specialized geospatial solutions tailored for every sector's unique challenges and requirements.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Industry Expertise" title="Industries We Serve" description="Deep domain knowledge combined with geospatial expertise across 8+ sectors." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} {...fadeUp} transition={{ delay: i * 0.06 }} className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <ind.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;
