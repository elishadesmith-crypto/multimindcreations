import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">
              Multimind<span className="text-gradient"> Creations</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Pioneering geospatial intelligence solutions for a smarter, more connected world.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
          <ul className="space-y-2">
            {["GIS Mapping", "Remote Sensing", "Spatial Analytics", "Data Engineering", "Survey & LiDAR"].map(s => (
              <li key={s}><Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="space-y-2">
            {[["About", "/about"], ["Portfolio", "/portfolio"], ["Careers", "/careers"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, path]) => (
              <li key={label}><Link to={path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" /> info@multimindcreations.com
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Hyderabad, Telangana, India
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Multimind Creations. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
