import { notFound } from "next/navigation";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
  getRelatedProject,
} from "@/content/projects";
import { CaseStudyView } from "@/components/pages/case-study-view";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case study" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const related = getRelatedProject(slug);

  return (
    <CaseStudyView
      project={project}
      prev={prev}
      next={next}
      related={related}
    />
  );
}
