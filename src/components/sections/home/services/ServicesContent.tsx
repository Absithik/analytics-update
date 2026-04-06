import { Server, Grid, Activity, ShieldCheck, PieChart, Code } from "lucide-react";
import ServicesAnimation from "./ServicesAnimation";

export interface ServiceData {
  title: string;
  desc: string;
  iconName: "Server" | "Grid" | "Activity" | "ShieldCheck" | "PieChart" | "Code";
  bullets: string[];
}

interface Props {
  services: ServiceData[];
}

const iconMap = {
  Server,
  Grid,
  Activity,
  ShieldCheck,
  PieChart,
  Code
};

export default function ServicesContent({ services }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ServicesAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Analytics & MarTech Solutions
          </h2>
        </ServicesAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {
            const IconComponent = iconMap[srv.iconName];

            return (
              <ServicesAnimation
                key={i}
                type="card"
                index={i}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-indigo-300 transition-all group hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-6 flex-1 pb-6 border-b border-slate-100">{srv.desc}</p>
                
                <ul className="space-y-3">
                  {srv.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </ServicesAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
