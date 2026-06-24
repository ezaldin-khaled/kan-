import { useRef } from "react";
import { portfolioProjects } from "@/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ProjectCard({
  category,
  title,
  image,
  alt,
  aspect,
}: {
  category: string;
  title: string;
  image: string;
  alt: string;
  aspect: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container ${aspect}`}
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-stack-lg opacity-0 transition-opacity group-hover:opacity-100">
          <span className="mb-2 font-label-caps text-label-caps text-on-primary">
            {category}
          </span>
          <h3 className="font-headline-md text-headline-md text-on-primary">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [featured, ...stacked] = portfolioProjects;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap"
    >
      <div className="mb-stack-lg flex flex-col items-baseline justify-between md:flex-row">
        <h2 className="mb-4 font-headline-xl text-headline-xl uppercase tracking-tighter md:mb-0">
          Portfolio
        </h2>
        <div className="max-w-xs text-right">
          <p className="font-body-md text-on-surface-variant">
            Selected works that define our standard for clinical precision and
            creative vibrancy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="md:col-span-7">
          <ProjectCard
            category={featured.category}
            title={featured.title}
            image={featured.image}
            alt={featured.alt}
            aspect={featured.aspect}
          />
        </div>
        <div className="flex flex-col gap-gutter md:col-span-5">
          {stacked.map((p) => (
            <ProjectCard
              key={p.id}
              category={p.category}
              title={p.title}
              image={p.image}
              alt={p.alt}
              aspect={p.aspect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
