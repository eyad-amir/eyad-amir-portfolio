import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
export default function NeuralNetwork() {
  const ref = useRef(null),
    reduced = useReducedMotion();
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width,
      height,
      frame,
      visible = true;
    const mouse = { x: 0, y: 0 };
    const nodes = Array.from({ length: 30 }, (_, i) => ({
      x: ((i * 73 + 19) % 100) / 100,
      y: ((i * 47 + 11) % 100) / 100,
      phase: i * 0.9,
    }));
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left - width / 2) * 0.018;
      mouse.y = (e.clientY - r.top - height / 2) * 0.018;
    };
    function draw(time = 0) {
      ctx.clearRect(0, 0, width, height);
      const points = nodes.map((n) => ({
        x:
          n.x * width +
          (reduced ? 0 : Math.sin(time / 5500 + n.phase) * 12 + mouse.x),
        y:
          n.y * height +
          (reduced ? 0 : Math.cos(time / 6500 + n.phase) * 12 + mouse.y),
      }));
      points.forEach((a, i) => {
        points.slice(i + 1).forEach((b) => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 145) {
            ctx.strokeStyle = `rgba(200,129,78,${0.2 * (1 - distance / 145)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
        ctx.fillStyle = "rgba(200,129,78,.55)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      if (!reduced && visible) frame = requestAnimationFrame(draw);
    }
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) draw();
    });
    const sizeObserver = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    sizeObserver.observe(canvas);
    resize();
    observer.observe(canvas);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      window.removeEventListener("pointermove", move);
    };
  }, [reduced]);
  return <canvas ref={ref} className="neural-canvas" aria-hidden="true" />;
}
