import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, TreePine, Zap, Truck, Waves, Shield, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const solutions = [
  { icon: Building2, title: "Smart City Planning", desc: "Comprehensive GIS solutions for urban planning, land management, and smart infrastructure development. Integrate spatial data to build livable, sustainable cities.", benefits: ["Urban growth modeling", "Zoning optimization", "Traffic flow analysis", "Utility network planning"] },
  { icon: TreePine, title: "Environmental Monitoring", desc: "Real-time environmental surveillance systems powered by satellite imagery and sensor data for deforestation tracking, pollution monitoring, and biodiversity conservation.", benefits: ["Deforestation alerts", "Air quality mapping", "Wetland monitoring", "Carbon footprint analysis"] },
  { icon: Zap, title: "Energy & Utilities", desc: "Geospatial solutions for energy infrastructure planning, pipeline routing, renewable energy site selection, and utility asset management.", benefits: ["Solar potential mapping", "Pipeline routing", "Grid optimization", "Asset tracking"] },
  { icon: Truck, title: "Logistics & Transportation", desc: "Optimize route planning, fleet management, and supply chain operations with real-time geospatial intelligence and network analysis.", benefits: ["Route optimization", "Fleet tracking", "Last-mile delivery", "Network analysis"] },
  { icon: Waves, title: "Water Resource Management", desc: "Advanced hydrological modeling, watershed analysis, and flood risk assessment solutions for sustainable water resource management.", benefits: ["Flood risk mapping", "Watershed analysis", "Groundwater modeling", "Irrigation planning"] },
  { icon: Shield, title: "Defense & Security", desc: "Mission-critical geospatial intelligence solutions for terrain analysis, surveillance planning, and strategic defense operations.", benefits: ["Terrain analysis", "Surveillance planning", "Border monitoring", "Threat assessment"] },
];

const Solutions = () => (
  <Layout>
    <SEOHead
      title="Solutions"
      description="Discover Multimind Creations' industry-specific GIS solutions for smart cities, environmental monitoring, energy, logistics, water resources, and defense."
      keywords="GIS solutions, smart city GIS, environmental monitoring, geospatial intelligence, water resource management"
      canonical="https://multimindcreations.com/solutions"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Solutions</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Industry-Specific <span className="text-gradient">Geospatial</span> Solutions</h1>
          <p className="mt-6 text-lg text-muted-foreground">Tailored GIS solutions designed to address the unique challenges of every industry.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 space-y-8">
        {solutions.map((s, i) => (
          <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="grid gap-6 rounded-xl border border-border bg-card p-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Benefits</h3>
              <ul className="space-y-2">
                {s.benefits.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <SectionHeading badge="Custom Solutions" title="Don't See Your Industry?" description="We build custom geospatial solutions for any sector. Let's discuss your requirements." />
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
          Discuss Your Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Solutions;
