import { AlertOctagon } from "lucide-react";
import ProblemsAnimation from "./ProblemsAnimation";

interface Props {
  problems: string[];
}

export default function ProblemsContent({ problems }: Props) {
  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <ProblemsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Is your Marketing data actually reliable?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Many companies invest heavily in marketing but still struggle with foundational data issues.
          </p>
        </ProblemsAnimation>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, i) => (
            <ProblemsAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white border border-red-200 p-6 rounded-2xl flex flex-col gap-4 group hover:border-red-300 transition-colors shadow-sm"
            >
              <AlertOctagon className="w-8 h-8 text-red-500/70 group-hover:text-red-500 transition-colors" />
              <p className="text-slate-700 font-medium">{prob}</p>
            </ProblemsAnimation>
          ))}
        </div>

        <ProblemsAnimation
          type="footer"
          className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-10 text-center shadow-lg"
        >
          <p className="text-2xl font-semibold text-slate-900 mb-4">
            Without reliable data, marketing decisions become guesswork.
          </p>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            This leads to wasted ad spend, poor performance, and missed growth opportunities. That’s where MarTechRise comes in. We fix your tracking, eliminate data gaps, and build clean, reliable data pipelines.
          </p>
        </ProblemsAnimation>
      </div>
    </section>
  );
}
