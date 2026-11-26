import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Visual height of the stacked logo mark + wordmark */
  height?: number;
  priority?: boolean;
};

export function ShoreLogo({ className, height = 40, priority = false }: Props) {
  const width = Math.round(height * (571 / 416));

  return (
    <Image
      src="/images/shore-logo-white.png"
      alt="Shore GTM"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      style={{ height, width: "auto" }}
    />
  );
}
