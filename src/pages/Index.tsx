import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Map, Satellite, BarChart3, Database, Layers, Globe2, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "150+", label: "Global Clients" },
  { value: "35+", label: "GIS Experts" },
];

const services = [
  { icon: Map, title: "GIS Mapping", desc: "High-precision digital mapping solutions for urban planning, infrastructure, and resource management." },
  { icon: Satellite, title: "Remote Sensing", desc: "Satellite and aerial imagery analysis for environmental monitoring and land use classification." },
  { icon: BarChart3, title: "Spatial Analytics", desc: "Advanced geospatial data analytics for informed decision-making and strategic planning." },
  { icon: Database, title: "Data Engineering", desc: "Robust geospatial data pipelines, ETL processes, and database management solutions." },
  { icon: Layers, title: "BIM Integration", desc: "Seamless Building Information Modeling integration with geospatial datasets." },
  { icon: Globe2, title: "Web GIS", desc: "Interactive web-based mapping applications and geoportals for data visualization." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => (
  <Layout>
    <SEOHead
      title="Home"
      description="Multimind Creations is a leading GIS and geospatial solutions company offering mapping, remote sensing, spatial analytics, and data engineering services."
      keywords="GIS, geospatial, mapping, remote sensing, spatial analytics, India, Multimind Creations"
    />

    {/* Hero */}
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            Geospatial Intelligence
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Mapping the Future with{" "}
            <span className="text-gradient">Precision GIS</span> Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We transform complex geospatial data into actionable intelligence, empowering organizations to make smarter decisions with cutting-edge mapping technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Get in Touch <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="font-heading text-3xl font-bold text-gradient">{stat.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="What We Do" title="Our Core GIS Services" description="End-to-end geospatial solutions designed to unlock the full potential of location-based data." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 dot-pattern" />
      <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ready to Transform Your <span className="text-gradient">Geospatial Data</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">Partner with us to unlock powerful insights from your location data.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-glow">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
