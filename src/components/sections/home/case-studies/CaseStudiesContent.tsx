import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import CaseStudiesAnimation from "./CaseStudiesAnimation";

export interface CaseStudy {
  title: string;
  desc: string;
  res1: string;
  res2: string;
}

interface Props {
  studies: CaseStudy[];
}

export default function CaseStudiesContent({ studies }: Props) {
  return (
    <section className="bg-white py-24 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <CaseStudiesAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Results from Fixing Broken Data & Tracking Systems
          </h2>
        </CaseStudiesAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {studies.map((study, i) => (
            <CaseStudiesAnimation
              key={i}
              type="card"
              index={i}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm flex flex-col group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex flex-col justify-center items-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h3>
              <p className="text-slate-600 mb-8 border-b border-slate-200 pb-8 flex-1 leading-relaxed">
                {study.desc}
              </p>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-indigo-700 uppercase tracking-widest">Results</p>
                <div className="flex items-start gap-3">
                  <span className="text-green-500">✔️</span>
                  <span className="text-slate-800 font-medium">{study.res1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500">✔️</span>
                  <span className="text-slate-800 font-medium">{study.res2}</span>
                </div>
              </div>
            </CaseStudiesAnimation>
          ))}
        </div>

        <CaseStudiesAnimation type="footer" className="text-center">
          <Link href="#audit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-8 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all hover:scale-105 shadow-sm">
            Want similar results? Get a free analytics audit
            <ArrowRight className="h-5 w-5 text-indigo-600" />
          </Link>
        </CaseStudiesAnimation>
      </div>
    </section>
  );
}
