import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Clock, User, Calendar, Share2,
    Bookmark, CheckCircle2, ShieldCheck, Zap
} from 'lucide-react';
import { BLOGS, BLOG_FAQ } from '@/constants';
import Button from '@/components/ui/Button';
import FAQ from '@/components/common/FAQ';
import Schema from '@/components/common/Schema';

interface BlogDetailProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOGS.find(b => b.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found | MarTechRise.ai',
        };
    }

    return {
        title: `${post.title} | MarTechRise.ai Insights`,
        description: post.content.substring(0, 160),
    };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const { slug } = await params;
    const post = BLOGS.find(b => b.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Schema faqs={BLOG_FAQ} />

            <div className="container mx-auto px-4 pt-40 pb-24">
                {/* Breadcrumbs */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-black transition-colors mb-12 group uppercase text-xs tracking-widest"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>

                {/* Header Section */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                            {post.category} Technical Insight
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <User size={14} className="text-indigo-500" /> {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-indigo-500" /> {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-indigo-500" /> {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="max-w-6xl mx-auto mb-24 aspect-video rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-12 gap-20 max-w-6xl mx-auto">
                    <article className="lg:col-span-8">
                        <div className="prose prose-slate prose-lg max-w-none">
                            <p className="text-2xl font-medium text-slate-600 leading-relaxed mb-12 italic border-l-4 border-indigo-600 pl-8">
                                {post.content}
                            </p>

                            {(post as any).fullBody ? (
                                (post as any).fullBody
                            ) : (
                                <>
                                    <h3 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">The Technical Bottleneck</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                                        In the modern privacy landscape, client-side tracking is increasingly unreliable. Browser protections and ad blockers frequently truncate data packets, leading to attribution gaps of up to 40% in some retail environments.
                                    </p>

                                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 my-12">
                                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <Zap size={16} className="text-indigo-600" /> Key Strategic Takeaways
                                        </h4>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            {[
                                                "Server-side tagging is mandatory for data sovereignty.",
                                                "First-party data collection is the only resilient strategy for 2025.",
                                                "Technical measurement audits should occur quarterly, not annually."
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start text-slate-700 font-bold text-sm">
                                                    <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h3 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Architectural Solutions</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                                        Moving tracking logic to a centralized server allows for PII redaction, data enrichment, and improved page load performance. By controlling the stream, enterprises can ensure that only compliant, cleaned data reaches downstream vendors like Google and Facebook.
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex gap-4">
                                <Button variant="outline" className="flex gap-2 items-center text-xs h-10 px-4">
                                    <Share2 size={14} /> Share
                                </Button>
                                <Button variant="outline" className="flex gap-2 items-center text-xs h-10 px-4">
                                    <Bookmark size={14} /> Save
                                </Button>
                            </div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Validated by MarTechRise Labs</p>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
                            <ShieldCheck className="text-indigo-400 mb-6" size={32} />
                            <h4 className="text-xl font-bold mb-4">Need an Architectural Review?</h4>
                            <p className="text-slate-400 mb-8 font-medium text-sm leading-relaxed">
                                Our senior leads can audit your current tracking stack and identify gaps in your data governance.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary" className="w-full h-14 text-sm">Request Free Audit</Button>
                            </Link>
                        </div>

                        <div className="p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Related Field Notes</h4>
                            <div className="space-y-8">
                                {BLOGS.filter(b => b.slug !== post.slug).slice(0, 2).map(b => (
                                    <Link key={b.slug} href={`/blog/${b.slug}`} className="group block">
                                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{b.category}</span>
                                        <h5 className="text-md font-bold text-slate-900 mt-2 group-hover:text-indigo-600 transition-colors tracking-tight">{b.title}</h5>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                {/* FAQ Section */}
                <section className="py-32 mt-32 border-t border-slate-100">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Technical FAQ</h2>
                        <p className="text-slate-500">Common questions regarding this architectural pattern.</p>
                    </div>
                    <FAQ items={BLOG_FAQ} />
                </section>
            </div>
        </div>
    );
}
