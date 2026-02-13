import { ExternalLink } from "lucide-react";

interface Reference {
  title: string;
  url: string;
  type: string;
}

interface ReferenceLinksProps {
  references: Reference[];
}

export function ReferenceLinks({ references }: ReferenceLinksProps) {
  // Group references by type
  const grouped = references.reduce<Record<string, Reference[]>>(
    (acc, ref) => {
      if (!acc[ref.type]) acc[ref.type] = [];
      acc[ref.type].push(ref);
      return acc;
    },
    {}
  );

  return (
    <section className="border-t bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
          References &amp; Sources
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([type, refs]) => (
            <div key={type}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                {type}
              </p>
              <ul className="flex flex-col gap-1.5">
                {refs.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-blue-700"
                    >
                      <ExternalLink className="size-3 shrink-0 text-slate-400" />
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
