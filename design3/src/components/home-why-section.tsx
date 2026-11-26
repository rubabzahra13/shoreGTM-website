import Image from "next/image";
import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

type WhyItem = { title: string; body: string };

export function HomeWhySection({ items }: { items: WhyItem[] }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-16">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-lg bg-shore-navy sm:aspect-[5/6] lg:order-1 lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/images/why-shore.png"
              alt="Shore GTM founder presenting on stage to a live audience"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-shore-navy/50 via-transparent to-transparent"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionEyebrow>Why Shore GTM</SectionEyebrow>
            <SectionHeading className="max-w-[16ch]">
              Judgment that comes from owning the number.
            </SectionHeading>

            <ul className="mt-8 space-y-6">
              {items.map((item) => (
                <li key={item.title} className="border-l-2 border-shore-teal/40 pl-4">
                  <h3 className="font-display text-[1.15rem] tracking-[-0.015em] text-shore-heading">
                    {item.title.replace(/\.$/, "")}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-shore-body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
