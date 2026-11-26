"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import "./tideline-cta-utils/tideline-cta.css";

/**
 * Tideline CTA - dry copy over shore media, cream buoy CTA.
 * Tide fill / wave crest removed (static photo hero).
 */

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  sub?: ReactNode;
  /** @deprecated Unused; kept for call-site compatibility. */
  taken?: number;
  action: string;
  href?: string;
  details?: string[];
  theme?: "paper" | "night" | "shore";
  motion?: "full" | "reduced";
  className?: string;
  /** @deprecated Unused; kept for call-site compatibility. */
  animateOnMount?: boolean;
  /** Show capacity / seats-taken meter (legacy tideline framing) */
  showCapacity?: boolean;
  /** Optional real shoreline photo behind the copy */
  mediaSrc?: string;
  mediaAlt?: string;
};

export function TidelineCta({
  eyebrow,
  headline,
  sub,
  taken = 0,
  action,
  href = "#",
  details = [],
  theme = "shore",
  motion = "full",
  className = "",
  showCapacity = false,
  mediaSrc,
  mediaAlt = "",
}: Props) {
  const pct = Math.round(taken * 100);

  return (
    <section
      className={`tlc tlc--${theme} ${className}`.trim()}
      data-motion={motion}
      data-media={mediaSrc ? "true" : undefined}
    >
      {mediaSrc && (
        <div className="tlc__media" aria-hidden={mediaAlt ? undefined : true}>
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            priority
            sizes="100vw"
            className="tlc__media-img"
          />
          <div className="tlc__media-veil" aria-hidden="true" />
        </div>
      )}

      <div className="tlc__surface">
        <div className="tlc__dry">
          <div className="tlc__inner">
            {eyebrow && <p className="tlc__eyebrow">{eyebrow}</p>}
            <h2 className="tlc__headline">{headline}</h2>
            {sub && <p className="tlc__sub">{sub}</p>}
            {details.length > 0 && (
              <ul className="tlc__details">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            {showCapacity && <p className="tlc__level">{pct}% of seats taken</p>}
          </div>
        </div>
      </div>

      <a href={href} className="tlc__buoy">
        {action}
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </a>
    </section>
  );
}

export default TidelineCta;
