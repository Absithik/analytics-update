import DeliverablesContent from "./DeliverablesContent";

const items: string[] = [
  "Detailed Solution Design Document (SDD)",
  "Data layer specification document",
  "Tagging & tracking implementation",
  "QA & validation reports",
  "Dashboard & reporting setup",
  "Documentation for future scalability"
];

export default function DeliverablesSection() {
  return <DeliverablesContent items={items} />;
}
