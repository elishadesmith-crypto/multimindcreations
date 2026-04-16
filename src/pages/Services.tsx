import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Map, Satellite, BarChart3, Database, Layers, Globe2, Compass, ScanLine, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const services = [
  { icon: Map, title: "GIS Mapping & Cartography", desc: "High-precision digital mapping, topographic surveys, and cartographic production for urban planning, infrastructure development, and natural resource management.", features: ["Topographic Mapping", "Cadastral Mapping", "Thematic Maps", "Atlas Production"] },
  { icon: Satellite, title: "Remote Sensing & Image Analysis", desc: "Advanced satellite and aerial image processing for land use classification, change detection, vegetation analysis, and environmental monitoring.", features: ["Image Classification", "Change Detection", "NDVI Analysis", "Orthorectification"] },
  { icon: BarChart3, title: "Spatial Analytics & Modeling", desc: "Powerful geospatial analysis and predictive modeling to uncover patterns, optimize operations, and forecast trends from location data.", features: ["Hotspot Analysis", "Network Analysis", "Terrain Modeling", "Predictive Modeling"] },
  { icon: Database, title: "Geospatial Data Engineering", desc: "End-to-end data pipeline solutions including data collection, cleaning, transformation, and management for large-scale geospatial datasets.", features: ["Data Migration", "ETL Pipelines", "Quality Assurance", "Database Design"] },
  { icon: Layers, title: "BIM & 3D GIS Integration", desc: "Seamless integration of Building Information Modeling with GIS for smart city planning, facility management, and construction monitoring.", features: ["3D City Models", "Indoor Mapping", "BIM-GIS Bridge", "Facility Management"] },
  { icon: Globe2, title: "Web GIS & Geoportals", desc: "Interactive web-based mapping applications, dashboards, and geoportals for real-time data visualization and collaborative spatial workflows.", features: ["Map Portals", "Real-time Dashboards", "API Development", "Mobile GIS Apps"] },
  { icon: Compass, title: "Surveying & LiDAR", desc: "Precision ground surveys, drone-based aerial surveys, and LiDAR data acquisition for accurate terrain and infrastructure mapping.", features: ["Drone Surveys", "LiDAR Processing", "Ground Control", "Point Cloud Analysis"] },
  { icon: ScanLine, title: "AI & Machine Learning for GIS", desc: "Cutting-edge AI-powered geospatial solutions for automated feature extraction, object detection, and intelligent data classification.", features: ["Object Detection", "Auto Classification", "Pattern Recognition", "Deep Learning Models"] },
];

const Services = () => (
  <Layout>
    <SEOHead
      title="Services"
      description="Explore Multimind Creations' comprehensive GIS services including mapping, remote sensing, spatial analytics, data engineering, BIM integration, and Web GIS solutions."
      keywords="GIS services, mapping services, remote sensing, spatial analytics, geospatial data engineering, Web GIS, LiDAR, BIM GIS"
      canonical="https://multimindcreations.com/services"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Our Services</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Comprehensive <span className="text-gradient">GIS & Geospatial</span> Services</h1>
          <p className="mt-6 text-lg text-muted-foreground">From data acquisition to advanced analytics, we offer a full spectrum of geospatial services tailored to your needs.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.06 }} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <SectionHeading badge="Let's Work Together" title="Need a Custom GIS Solution?" description="Our team of geospatial experts is ready to tackle your unique challenges." />
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
