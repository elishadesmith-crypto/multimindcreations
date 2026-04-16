import { motion } from "framer-motion";
import { Cpu, Cloud, Boxes, Workflow, Database, Globe2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const techStack = [
  { icon: Globe2, title: "ArcGIS & QGIS", desc: "Industry-standard GIS platforms for spatial analysis, map production, and enterprise geospatial workflows." },
  { icon: Cpu, title: "AI & Machine Learning", desc: "TensorFlow, PyTorch, and custom deep learning models for automated feature extraction and classification." },
  { icon: Cloud, title: "Cloud GIS", desc: "AWS, Azure, and Google Cloud Platform for scalable geospatial data processing and storage." },
  { icon: Boxes, title: "Remote Sensing Tools", desc: "ERDAS IMAGINE, ENVI, and Google Earth Engine for satellite image processing and analysis." },
  { icon: Workflow, title: "Automation & ETL", desc: "FME, Python, and custom pipelines for automated data transformation and quality assurance." },
  { icon: Database, title: "Spatial Databases", desc: "PostGIS, Oracle Spatial, and MongoDB for enterprise-grade geospatial data management." },
];

const tools = ["ArcGIS Pro", "QGIS", "ERDAS IMAGINE", "ENVI", "Google Earth Engine", "FME", "PostGIS", "GeoServer", "MapBox", "Leaflet", "OpenLayers", "GDAL/OGR", "Python", "R", "TensorFlow", "PostgreSQL", "Docker", "AWS", "Azure", "Pix4D", "Agisoft", "AutoCAD"];

const Technology = () => (
  <Layout>
    <SEOHead
      title="Technology"
      description="Discover the cutting-edge GIS technologies and tools used by Multimind Creations including ArcGIS, QGIS, AI/ML, Cloud GIS, and advanced spatial databases."
      keywords="GIS technology, ArcGIS, QGIS, PostGIS, remote sensing tools, AI GIS, cloud GIS, geospatial technology stack"
      canonical="https://multimindcreations.com/technology"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Technology</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Powered by <span className="text-gradient">Cutting-Edge</span> Technology</h1>
          <p className="mt-6 text-lg text-muted-foreground">We leverage the most advanced geospatial technologies and platforms to deliver world-class solutions.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Tech Stack" title="Our Technology Ecosystem" description="A robust combination of industry-leading tools and custom-built solutions." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((t, i) => (
            <motion.div key={t.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Tools & Platforms" title="Tools We Use" description="Proficiency across 20+ industry-standard tools and platforms." />
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Technology;
