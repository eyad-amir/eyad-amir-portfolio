import { useEffect, useState } from "react";
export function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id || '');
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}
