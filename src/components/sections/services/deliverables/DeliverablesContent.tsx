import { Check } from "lucide-react";
import DeliverablesAnimation from "./DeliverablesAnimation";

interface Props {
  items: string[];
}

export default function DeliverablesContent({ items }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-xl shadow-indigo-500/5 rounded-3xl p-10 md:p-16">
          <DeliverablesAnimation type="header" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Clear Outputs. No Guesswork.</h2>
            <p className="text-slate-600 text-lg">When you work with us, you receive everything documented, structured, and reusable.</p>
          </DeliverablesAnimation>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {items.map((item, i) => (
              <DeliverablesAnimation
                key={i}
                type="item"
                index={i}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-indigo-600 group-hover:scale-110 transition-transform group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-700 text-lg">{item}</span>
              </DeliverablesAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
