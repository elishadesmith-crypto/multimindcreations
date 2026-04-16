import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const posts = [
  { slug: "ai-revolutionizing-gis", title: "How AI is Revolutionizing GIS and Geospatial Analytics", excerpt: "Explore how artificial intelligence and deep learning are transforming feature extraction, image classification, and predictive modeling in GIS.", date: "Apr 10, 2026", category: "AI & GIS", readTime: "6 min" },
  { slug: "cloud-gis-future", title: "Cloud GIS: The Future of Scalable Geospatial Infrastructure", excerpt: "Learn why organizations are migrating to cloud-based GIS platforms and how it improves collaboration, scalability, and cost efficiency.", date: "Mar 28, 2026", category: "Technology", readTime: "5 min" },
  { slug: "drone-surveying-guide", title: "Complete Guide to Drone Surveying for GIS Professionals", excerpt: "A comprehensive overview of drone-based surveying techniques, equipment selection, and data processing workflows for mapping projects.", date: "Mar 15, 2026", category: "Surveying", readTime: "8 min" },
  { slug: "smart-city-gis-planning", title: "Role of GIS in Smart City Planning and Urban Development", excerpt: "How geospatial technology is enabling smarter urban infrastructure, traffic management, and sustainable city development worldwide.", date: "Feb 22, 2026", category: "Smart Cities", readTime: "7 min" },
  { slug: "remote-sensing-climate", title: "Remote Sensing for Climate Change Monitoring", excerpt: "Satellite-based remote sensing techniques for tracking deforestation, glacier retreat, sea-level rise, and atmospheric changes.", date: "Feb 8, 2026", category: "Environment", readTime: "6 min" },
  { slug: "postgis-spatial-databases", title: "Getting Started with PostGIS: A Spatial Database Primer", excerpt: "An introduction to PostGIS, spatial queries, indexing, and best practices for managing geospatial data in PostgreSQL.", date: "Jan 20, 2026", category: "Tutorial", readTime: "10 min" },
];

const Blog = () => (
  <Layout>
    <SEOHead
      title="Blog"
      description="Read the latest insights, tutorials, and news on GIS, remote sensing, spatial analytics, and geospatial technology from Multimind Creations' expert team."
      keywords="GIS blog, geospatial articles, remote sensing tutorials, spatial analytics insights, GIS technology news"
      canonical="https://multimindcreations.com/blog"
    />

    <section className="relative overflow-hidden py-24 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">Blog</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Insights & <span className="text-gradient">Knowledge Hub</span></h1>
          <p className="mt-6 text-lg text-muted-foreground">Stay updated with the latest in geospatial technology, tutorials, and industry trends.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article key={post.slug} {...fadeUp} transition={{ delay: i * 0.08 }} className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="h-44 bg-gradient-card dot-pattern" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">Read More <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <SectionHeading title="Want to stay updated?" description="Subscribe to our newsletter for the latest geospatial insights." />
        <div className="mx-auto flex max-w-md gap-2">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
          <button className="rounded-lg bg-gradient-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow">Subscribe</button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
