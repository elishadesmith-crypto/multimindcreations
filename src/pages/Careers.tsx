import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const openings = [
  { title: "Senior GIS Analyst", location: "Hyderabad", type: "Full-time", dept: "Analytics" },
  { title: "Remote Sensing Specialist", location: "Hyderabad", type: "Full-time", dept: "Remote Sensing" },
  { title: "Python Developer (GIS)", location: "Remote", type: "Full-time", dept: "Engineering" },
  { title: "Web GIS Developer", location: "Hyderabad", type: "Full-time", dept: "Development" },
  { title: "Project Manager – GIS", location: "Hyderabad", type: "Full-time", dept: "Operations" },
  { title: "Data Engineer – Geospatial", location: "Remote", type: "Full-time", dept: "Engineering" },
];

const perks = ["Competitive salary & benefits", "Flexible working hours", "Remote work options", "Learning & development budget", "Health insurance", "Team offsites & events", "Latest tools & technology", "Career growth opportunities"];

const Careers = () => (
  <Layout>
    <SEOHead
      title="Careers"
      description="Join Multimind Creations and build the future of geospatial technology. Explore open positions in GIS, remote sensing, development, and data engineering."
      keywords="GIS jobs, geospatial careers, GIS analyst jobs India, remote sensing jobs, Web GIS developer, Multimind Creations careers"
      canonical="https://multimindcreations.com/careers"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Careers</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Shape the Future of <span className="text-gradient">Geospatial Tech</span></h1>
          <p className="mt-6 text-lg text-muted-foreground">Join a passionate team of GIS pioneers and help map the world's toughest challenges.</p>
        </motion.div>
      </div>
    </section>

    {/* Perks */}
    <section className="border-b border-border bg-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Why Join Us" title="Perks & Benefits" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {perks.map((perk, i) => (
            <motion.div key={perk} {...fadeUp} transition={{ delay: i * 0.05 }} className="rounded-lg border border-border bg-background p-4 text-center text-sm text-muted-foreground">
              {perk}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Openings */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Open Positions" title="Current Openings" description="Explore our available roles and find your next opportunity." />
        <div className="mx-auto max-w-3xl space-y-4">
          {openings.map((job, i) => (
            <motion.div key={job.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{job.title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                  <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.dept}</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Apply <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
