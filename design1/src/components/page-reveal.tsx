"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

/** Mount-triggered entrance for page heroes / overlays. */
export function PageReveal({ children, className, as: Tag = "section" }: Props) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Tag className={cn("page-reveal", className)} data-play={play || undefined}>
      {children}
    </Tag>
  );
}
