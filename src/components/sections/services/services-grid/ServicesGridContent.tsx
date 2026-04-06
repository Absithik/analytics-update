import { ReactNode } from "react";
import { Network, Blocks, Database, Server, CheckSquare, LineChart, HelpCircle } from "lucide-react";
import ServicesGridAnimation from "./ServicesGridAnimation";

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

interface Props {
  services: ServiceData[];
}

export default function ServicesGridContent({ services }: Props) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Network": return <Network className="w-7 h-7" />;
      case "Blocks": return <Blocks className="w-7 h-7" />;
      case "Database": return <Database className="w-7 h-7" />;
      case "Server": return <Server className="w-7 h-7" />;
      case "CheckSquare": return <CheckSquare className="w-7 h-7" />;
      case "LineChart": return <LineChart className="w-7 h-7" />;
      default: return <HelpCircle className="w-7 h-7" />;
    }
  };

  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ServicesGridAnimation type="header" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Analytics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">MarTech Expertise</span>
          </h2>
          <p className="text-xl text-slate-600">
            A full-suite offering to ensure your tracking is completely accurate and built for scale.
          </p>
        </ServicesGridAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesGridAnimation
              key={index}
              type="card"
              index={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </ServicesGridAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
