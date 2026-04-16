import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const projects = [
  { title: "Urban Land Use Mapping – Hyderabad", category: "GIS Mapping", desc: "High-resolution land use/land cover mapping for the Greater Hyderabad Municipal Corporation covering 650 sq km.", tags: ["Land Use", "Urban Planning", "Satellite Imagery"] },
  { title: "Forest Change Detection – Western Ghats", category: "Remote Sensing", desc: "Multi-temporal satellite analysis to detect deforestation patterns and forest degradation across 12,000 sq km.", tags: ["Change Detection", "NDVI", "Environmental"] },
  { title: "Flood Risk Assessment – Kerala", category: "Spatial Analytics", desc: "Comprehensive flood hazard mapping and risk assessment model using hydrological modeling and terrain analysis.", tags: ["Flood Mapping", "Risk Assessment", "DEM"] },
  { title: "Pipeline Route Optimization – ONGC", category: "Data Engineering", desc: "Optimized pipeline routing for a 400 km natural gas pipeline using multi-criteria spatial analysis.", tags: ["Route Planning", "MCE Analysis", "Energy"] },
  { title: "Smart Campus GIS Portal – IIT Delhi", category: "Web GIS", desc: "Interactive web GIS portal for campus asset management, navigation, and facility monitoring.", tags: ["Web GIS", "Asset Management", "Portal"] },
  { title: "Drone Survey & 3D Modeling – Metro Rail", category: "Surveying", desc: "High-precision drone-based topographic survey and 3D terrain modeling for metro rail alignment.", tags: ["Drone Survey", "LiDAR", "3D Modeling"] },
];

const Portfolio = () => (
  <Layout>
    <SEOHead
      title="Portfolio"
      description="Explore Multimind Creations' portfolio of successful GIS projects including urban mapping, remote sensing, flood risk assessment, and Web GIS solutions."
      keywords="GIS portfolio, geospatial projects, mapping projects India, remote sensing projects, Web GIS case studies"
      canonical="https://multimindcreations.com/portfolio"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Portfolio</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Featured <span className="text-gradient">GIS Projects</span></h1>
          <p className="mt-6 text-lg text-muted-foreground">A showcase of our impactful geospatial projects across diverse industries and applications.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div key={p.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="h-48 bg-gradient-card dot-pattern flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary/40 transition-colors group-hover:text-primary" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <SectionHeading badge="Your Project Next" title="Let's Build Something Remarkable" description="Have a geospatial challenge? We'd love to help you solve it." />
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
          Start a Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
