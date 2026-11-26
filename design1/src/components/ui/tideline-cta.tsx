"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ASSESSMENT_URL } from "@/lib/links";
import "./tideline-cta-utils/tideline-cta.css";

/**
 * Editorial photo hero for What We Do - clear hierarchy, readable veil, trust strip + CTAs.
 */

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  lead?: ReactNode;
  sub?: ReactNode;
  /** @deprecated Unused; kept for call-site compatibility. */
  taken?: number;
  action: string;
  href?: string;
  secondaryAction?: string;
  secondaryHref?: string;
  details?: string[];
  theme?: "paper" | "night" | "shore";
  motion?: "full" | "reduced";
  className?: string;
  /** @deprecated Unused; kept for call-site compatibility. */
  animateOnMount?: boolean;
  showCapacity?: boolean;
  mediaSrc?: string;
  mediaAlt?: string;
  /** Looping background video (autoplay, muted). `mediaSrc` is used as poster when set. */
  mediaVideoSrc?: string;
};

export function TidelineCta({
  eyebrow = "What we do",
  headline,
  lead,
  sub,
  action,
  href = "#",
  secondaryAction = "Take the GTM assessment",
  secondaryHref = ASSESSMENT_URL,
  details = [],
  theme = "shore",
  motion = "full",
  className = "",
  mediaSrc,
  mediaAlt = "",
  mediaVideoSrc,
}: Props) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (motion === "reduced") {
      setPlay(true);
      return;
    }
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, [motion]);

  return (
    <section
      className={`tlc tlc--${theme} ${className}`.trim()}
      data-motion={motion}
      data-play={play || undefined}
      data-media={mediaSrc || mediaVideoSrc ? "true" : undefined}
      data-video={mediaVideoSrc ? "true" : undefined}
    >
      {(mediaVideoSrc || mediaSrc) && (
        <div className="tlc__media" aria-hidden={mediaAlt ? undefined : true}>
          {mediaSrc && (
            <Image
              src={mediaSrc}
              alt={mediaVideoSrc ? "" : mediaAlt}
              fill
              priority
              sizes="100vw"
              className={`tlc__media-img${mediaVideoSrc ? " tlc__media-img--poster" : ""}`}
              aria-hidden={mediaVideoSrc ? true : undefined}
            />
          )}
          {mediaVideoSrc && (
            <video
              className="tlc__media-video"
              autoPlay
              loop
              muted
              playsInline
              poster={mediaSrc}
              aria-hidden="true"
            >
              <source src={mediaVideoSrc} type="video/mp4" />
            </video>
          )}
          <div className="tlc__media-scrim" aria-hidden="true" />
          <div className="tlc__media-veil" aria-hidden="true" />
        </div>
      )}

      <div className="tlc__surface">
        <div className="tlc__copy">
          {eyebrow && <p className="tlc__eyebrow tlc__reveal tlc__reveal--1">{eyebrow}</p>}
          <h1 className="tlc__headline tlc__reveal tlc__reveal--2">{headline}</h1>
          {lead && <p className="tlc__lead tlc__reveal tlc__reveal--3">{lead}</p>}
          {sub && <div className="tlc__sub tlc__reveal tlc__reveal--4">{sub}</div>}

          <div className="tlc__actions tlc__reveal tlc__reveal--5">
            <a href={href} className="tlc__btn tlc__btn--primary">
              {action}
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            {secondaryAction && secondaryHref && (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tlc__btn tlc__btn--ghost"
              >
                {secondaryAction}
              </a>
            )}
          </div>

          {details.length > 0 && (
            <ul className="tlc__details tlc__reveal tlc__reveal--6">
              {details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default TidelineCta;
