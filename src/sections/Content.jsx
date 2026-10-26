import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Grid2X2,
  GraduationCap,
  ArrowUp,
  Copy,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { site } from "../data/site";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { experience, education } from "../data/experience";
import {
  Section,
  SectionTitle,
  Reveal,
  Card,
  Chip,
  ExternalLink,
} from "../components/ui";
export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionTitle number="01" label={site.nav[0]}>
          {site.about.title}
        </SectionTitle>
        <div className="about-grid">
          <p className="about-text">{site.about.text}</p>
          <div className="quote">
            <p className="eyebrow">{site.labels.quote}</p>
            <blockquote>“{site.about.quote}”</blockquote>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
export function Skills() {
  return (
    <Section id="skills" className="tinted">
      <Reveal>
        <SectionTitle number="02" label={site.nav[1]}>
          {site.titles.skills}
        </SectionTitle>
      </Reveal>
      <div className="skill-columns">
        {Object.entries(skills).map(([group, categories]) => (
          <Reveal key={group}>
            <div className={`skill-group ${group}`}>
              <h3>
                <span className="status-dot" />
                {site.labels[group]}
              </h3>
              {categories.map((category) => (
                <div className="skill-category" key={category.category}>
                  <h4>{category.category}</h4>
                  <div className="chips">
                    {category.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle number="03" label={site.nav[2]}>
          {site.titles.experience}
        </SectionTitle>
      </Reveal>
      <div className="timeline">
        {experience.map((item) => (
          <Reveal key={item.title}>
            <article className="timeline-entry">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="organization">{item.organization}</p>
                {item.track && <p className="track">{item.track}</p>}
                <p>{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (!inView || reduced) return;
    const control = animate(0, value, {
      duration: 1.5,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => control.stop();
  }, [inView, reduced, value]);
  return (
    <span ref={ref} aria-label={`${value.toLocaleString("en-US")}+`}>
      <span aria-hidden="true">{count.toLocaleString("en-US")}+</span>
    </span>
  );
}
export function Projects() {
  return (
    <Section id="projects" className="tinted">
      <Reveal>
        <SectionTitle number="04" label={site.nav[3]}>
          {site.titles.projects}
        </SectionTitle>
      </Reveal>
      {projects
        .filter((p) => p.featured)
        .map((project) => (
          <Reveal key={project.title}>
            <Card className="featured">
              <div className="project-top">
                <div>
                  <p className="eyebrow">{site.labels.featured}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="metric">
                  <Counter value={project.count} />
                  <small>{site.labels.records}</small>
                </div>
              </div>
              <figure>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="1400"
                  height="850"
                  loading="lazy"
                />
                <figcaption>{site.labels.preview}</figcaption>
              </figure>
              <div className="story-grid">
                {project.story.map((s) => (
                  <div key={s.label}>
                    <h4>{s.label}</h4>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="project-footer">
                <div className="chips">
                  {project.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <ExternalLink className="text-link" href={project.github}>
                  {site.labels.github}
                  <ArrowUpRight size={18} />
                </ExternalLink>
              </div>
            </Card>
          </Reveal>
        ))}
      <h3 className="additional-title">{site.labels.additional}</h3>
      <div className="project-grid">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <Reveal key={project.title}>
              <Card>
                <div className="project-icon">
                  {project.icon === "book" ? (
                    <BookOpen size={23} />
                  ) : (
                    <Grid2X2 size={23} />
                  )}
                </div>
                <p className="eyebrow">{site.labels.team}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                {project.github && (
                  <ExternalLink className="text-link" href={project.github}>
                    {site.labels.github}
                    <ArrowUpRight size={16} />
                  </ExternalLink>
                )}
              </Card>
            </Reveal>
          ))}
      </div>
    </Section>
  );
}
export function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionTitle number="05" label={site.nav[4]}>
          {site.titles.education}
        </SectionTitle>
      </Reveal>
      <div className="education-grid">
        {education.map((item) => (
          <Reveal key={item.title}>
            <article className="education-item">
              <GraduationCap size={26} />
              <h3>{item.title}</h3>
              <p className="qualification">{item.qualification}</p>
              <p>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
export function Contact() {
  const [toast, setToast] = useState("");
  const timeout = useRef();
  useEffect(() => () => clearTimeout(timeout.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setToast(site.labels.copied);
    } catch {
      setToast(site.labels.copyError);
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setToast(""), 3500);
  }
  return (
    <Section id="contact" className="contact-section">
      <Reveal>
        <div className="contact-grid">
          <div>
            <p className="eyebrow">06 / {site.nav[5]}</p>
            <h2>
              {site.titles.contact}
              <span>.</span>
            </h2>
            <p>{site.contact}</p>
            <p className="contact-location">
              <MapPin size={16} />
              {site.location}
            </p>
          </div>
          <div className="contact-details">
            <div className="email-row">
              <a href={`mailto:${site.email}`}>
                <Mail size={20} />
                <span>{site.email}</span>
              </a>
              <button
                className="icon-button"
                aria-label={site.labels.copy}
                onClick={copy}
              >
                {toast === site.labels.copied ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            <ExternalLink href={site.linkedin}>
              <FaLinkedinIn size={19} />
              {site.labels.socialLinkedin}
              <ArrowUpRight size={18} />
            </ExternalLink>
            <ExternalLink href={site.github}>
              <FaGithub size={19} />
              {site.labels.socialGithub}
              <ArrowUpRight size={18} />
            </ExternalLink>
            {site.showPhone && (
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone size={18} />
                {site.phone}
              </a>
            )}
            <div role="status" className="toast">
              {toast}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#" className="logo">
          {site.name}
          <span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {site.name}
          <span className="footer-divider"> / </span>
          {site.labels.footer}
        </p>
        <a className="icon-button" href="#" aria-label={site.labels.top}>
          <ArrowUp size={19} />
        </a>
      </div>
    </footer>
  );
}
