import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
export function SectionTitle({ number, label, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2>{children}</h2>
    </div>
  );
}
export function Card({ children, className = "" }) {
  return <article className={`card ${className}`}>{children}</article>;
}
export function Chip({ children }) {
  return (
    <motion.span whileHover={{ y: -3 }} className="chip">
      {children}
    </motion.span>
  );
}
export function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
