import ProblemsContent from "./ProblemsContent";

const problems: string[] = [
  "Broken tracking implementation",
  "Inaccurate or inconsistent data",
  "Poor visibility into the customer journey",
  "Missing / duplicate conversion tracking",
  "Disconnected marketing tools",
  "Meta Pixel & CAPI not firing correctly",
  "Incorrect attribution across channels",
  "Data mismatches between tools",
  "Broken funnels and journey tracking"
];

export default function ProblemsSection() {
  return <ProblemsContent problems={problems} />;
}
