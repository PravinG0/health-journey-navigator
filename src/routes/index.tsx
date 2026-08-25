import { createFileRoute } from "@tanstack/react-router";

import { ProgramShowcase } from "@/components/ProgramShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Medical Center | Personalized Hormone & Weight Programs" },
      {
        name: "description",
        content:
          "Personalized TRT, women's hormone therapy, medical weight management, and peptide programs designed around your individual health goals.",
      },
      {
        property: "og:title",
        content: "Royal Medical Center | Personalized Hormone & Weight Programs",
      },
      {
        property: "og:description",
        content:
          "Explore personalized programs for hormone balance, weight management, and peptide therapy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <ProgramShowcase />
    </main>
  );
}
