import React from 'react';
import { Calculator, ShieldCheck } from 'lucide-react';
import { glossaryContent } from './content';

const BlogGlossary: React.FC = () => {
    return (
        <section className="container mx-auto mt-20 border-t border-slate-100 pt-32">
            <div className="grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter">
                        {glossaryContent.title.main} <span className="text-indigo-600">{glossaryContent.title.highlight}</span>
                    </h2>
                    <div className="space-y-12">
                        {glossaryContent.terms.map((item, i) => (
                            <div key={i}>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.term}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.def}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
                    <h3 className="text-2xl font-bold mb-8 relative z-10">{glossaryContent.sidebar.title}</h3>
                    <p className="text-slate-400 mb-10 leading-relaxed font-medium relative z-10">
                        {glossaryContent.sidebar.description}
                    </p>
                    <div className="space-y-6 relative z-10">
                        <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                            <Calculator className="text-indigo-400" />
                            <div>
                                <p className="font-bold text-white mb-1">Attribution Calculator</p>
                                <p className="text-xs text-slate-400">Download our template for multi-touch attribution modeling.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                            <ShieldCheck className="text-emerald-400" />
                            <div>
                                <p className="font-bold text-white mb-1">Privacy Audit Checklist</p>
                                <p className="text-xs text-slate-400">A 20-point checklist for GDPR/CCPA analytics compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogGlossary;
