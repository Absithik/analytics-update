import Image from "next/image";
import LogoCarouselAnimation from "./LogoCarouselAnimation";

export interface LogoData {
  src: string;
  name: string;
}

interface Props {
  logos: LogoData[];
}

export default function LogoCarouselContent({ logos }: Props) {
  return (
    <section className="bg-slate-50 py-12 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex whitespace-nowrap">
          <LogoCarouselAnimation className="flex gap-16 items-center">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="relative h-20 w-32 cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
            ))}
          </LogoCarouselAnimation>
        </div>
      </div>
    </section>
  );
}
