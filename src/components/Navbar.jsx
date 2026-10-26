import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { site } from "../data/site";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  return (
    <>
      <a className="skip-link" href="#main">
        {site.labels.skip}
      </a>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo" onClick={() => setOpen(false)}>
            {site.name}
            <span>.</span>
          </a>
          <nav
            id="primary-navigation"
            aria-label={site.labels.navigation}
            className={open ? "nav-links open" : "nav-links"}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {site.nav.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={active === label.toLowerCase() ? "active" : ""}
                aria-current={
                  active === label.toLowerCase() ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={toggle}
              aria-label={site.labels.theme}
              title={site.labels.theme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              className="button small nav-cv"
              href={`${import.meta.env.BASE_URL}${site.cv}`}
              download
            >
              <Download size={14} />
              {site.labels.cv}
            </a>
            <button
              className="icon-button hamburger"
              aria-label={open ? site.labels.close : site.labels.menu}
              aria-expanded={open}
              aria-controls="primary-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
