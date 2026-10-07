import { notFound } from 'next/navigation';
import { sections, pages } from '@/components/types';
import Breadcrumb from '@/components/sections/Breadcrumb';
import BlogDetails from '@/components/sections/BlogDetails';

const getPosts = () => (sections as any).blog?.posts || [];

// All blog slugs are pre-rendered via generateStaticParams, so blocking on params is fine.
export const instant = false;

export function generateStaticParams() {
  return getPosts().map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((p: any) => p.slug === slug);
  const suffix = (pages as any).blogDetails?.meta?.titleSuffix ?? '';
  return post ? { title: post.title + suffix, description: post.description } : {};
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((p: any) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Blog" title2="Details" breadcrumb="Blog Details" parents={[{ label: "Our Blogs", href: "/blog" }]} />
      <BlogDetails post={post} />
    </main>
  );
}
