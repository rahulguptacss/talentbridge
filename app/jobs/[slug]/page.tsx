import { notFound } from 'next/navigation';
import { sections, pages } from '@/components/types';
import Breadcrumb from '@/components/sections/Breadcrumb';
import JobDetails from '@/components/sections/JobDetails';

const getJobs = () => (sections as any).jobs?.list || [];

// All job slugs are pre-rendered via generateStaticParams, so blocking on params is fine.
export const instant = false;

export function generateStaticParams() {
  return getJobs().map((j: any) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobs().find((j: any) => j.slug === slug);
  const suffix = (pages as any).jobDetails?.meta?.titleSuffix ?? '';
  return job ? { title: job.title + suffix, description: job.description } : {};
}

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobs().find((j: any) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Job" title2="Details" breadcrumb="Job Details" parents={[{ label: "Open Positions", href: "/jobs" }]} />
      <JobDetails job={job} />
    </main>
  );
}
