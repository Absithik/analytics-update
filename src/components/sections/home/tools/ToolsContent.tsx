import ToolsAnimation from "./ToolsAnimation";

export interface ToolCategory {
  title: string;
  list: string[];
}

interface Props {
  categories: ToolCategory[];
}

export default function ToolsContent({ categories }: Props) {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ToolsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powered by Industry-Leading Platforms
          </h2>
        </ToolsAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ToolsAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-lg group"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ToolsAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
