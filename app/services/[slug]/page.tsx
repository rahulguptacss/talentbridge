import { notFound } from 'next/navigation';
import { sections, pages } from '@/components/types';
import Breadcrumb from '@/components/sections/Breadcrumb';
import ServiceDetails from '@/components/sections/ServiceDetails';

const getServices = () => (sections as any).services?.items || [];

// All service slugs are pre-rendered via generateStaticParams, so blocking on params is fine.
export const instant = false;

export function generateStaticParams() {
  return getServices().map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServices().find((s: any) => s.slug === slug);
  const suffix = pages.serviceDetails?.meta?.titleSuffix ?? '';
  return service ? { title: service.title + suffix, description: service.description } : {};
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServices().find((s: any) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Service" title2="Details" breadcrumb="Service Details" />
      <ServiceDetails service={service} />
    </main>
  );
}
