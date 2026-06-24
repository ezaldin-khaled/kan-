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
    <article className="group">
      <div
        className={`relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container shadow-sm transition-all duration-500 group-hover:border-brand-purple/30 group-hover:shadow-xl group-hover:shadow-brand-purple/10 ${aspect}`}
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-purple/90 via-brand-purple/40 to-transparent p-stack-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="mb-2 font-label-caps text-label-caps text-on-primary/90">
            {category}
          </span>
          <h3 className="font-headline-md text-headline-md text-on-primary">
            {title}
          </h3>
        </div>
      </div>
    </article>
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
      <div className="mb-stack-lg flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent" />
        <div className="h-1 w-12 rounded-full bg-brand-gradient" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent" />
      </div>

      <div className="mb-16 flex flex-col items-start justify-between gap-stack-md md:flex-row md:items-end">
        <div>
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2 className="section-title">Portfolio</h2>
        </div>
        <p className="max-w-sm font-body-md leading-relaxed text-on-surface-variant md:text-right">
          Architects of brand success — selected works that define our standard
          for precision and creative vibrancy.
        </p>
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
