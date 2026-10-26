import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { site } from "../data/site";
import NeuralNetwork from "../components/NeuralNetwork";
import { ExternalLink } from "../components/ui";
export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % site.hero.rotating.length),
      2800,
    );
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <NeuralNetwork />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span />
            {site.hero.available}
          </p>
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="hero-title">
            {site.hero.title}
          </h1>
          <p className="hero-university">{site.university}</p>
          <p className="hero-description">{site.hero.description}</p>
          <div className="rotating" aria-label={site.hero.rotating.join(", ")}>
            <span aria-hidden="true" className="rotating-dot" />
            <motion.span
              aria-hidden="true"
              key={index}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {site.hero.rotating[index]}
            </motion.span>
          </div>
          <div className="hero-buttons">
            <a className="button" href="#projects">
              {site.labels.projects}
              <ArrowUpRight size={17} />
            </a>
            <a
              className="button outline"
              href={`${import.meta.env.BASE_URL}${site.cv}`}
              download
            >
              <Download size={16} />
              {site.labels.cv}
            </a>
            <a className="text-link" href="#contact">
              {site.labels.contact}
              <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-social">
            <ExternalLink href={site.github} aria-label={site.labels.socialGithub}>
              <FaGithub size={20} />
            </ExternalLink>
            <ExternalLink href={site.linkedin} aria-label={site.labels.socialLinkedin}>
              <FaLinkedinIn size={19} />
            </ExternalLink>
            <span className="social-divider" />
            <span>
              <MapPin size={13} />
              {site.location}
            </span>
          </div>
        </div>
        <div className="portrait-area">
          <div className="portrait-orbit">
            <div className="orbit-dot" />
            <img
              src={profile}
              width="497"
              height="497"
              alt={site.hero.portraitAlt}
              fetchpriority="high"
            />
            <div className="portrait-label">
              <span className="monogram">{site.labels.monogram}</span>
              <div>
                {site.name}
                <small>{site.location}</small>
              </div>
              <span className="mini-network" aria-hidden="true">
                ✧
              </span>
            </div>
          </div>
          <p className="portrait-note">{site.hero.note}</p>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>{site.hero.rotating.join(" / ")}</span>
        <a href="#about" aria-label={site.nav[0]}>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
