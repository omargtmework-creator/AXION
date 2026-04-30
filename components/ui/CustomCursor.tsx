"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const supportsFinePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const enabled = supportsFinePointer;

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      setActive(Boolean(target.closest("a, button")));
    };

    const id = setInterval(() => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.16,
        y: prev.y + (pos.y - prev.y) * 0.16,
      }));
    }, 16);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      clearInterval(id);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [enabled, pos.x, pos.y]);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[10000] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-primary/60 transition-all duration-200"
        style={{
          left: ringPos.x,
          top: ringPos.y,
          width: active ? 40 : 28,
          height: active ? 40 : 28,
          backgroundColor: active ? "rgba(200, 169, 110, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
