import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  cost: string;
  status: "completed" | "in-progress" | "planned";
  description: string;
  sourceUrl?: string;
}

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  "in-progress": "bg-amber-100 text-amber-800 border border-amber-200",
  planned: "bg-slate-100 text-slate-600 border border-slate-200",
};

export function ProjectCard({
  name,
  cost,
  status,
  description,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full cursor-pointer flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge className={statusStyles[status]}>{status}</Badge>
        </div>
        <p className="text-2xl font-extrabold tracking-tight text-blue-700">
          {cost}
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
      {sourceUrl && (
        <CardFooter>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1 text-xs text-slate-500 hover:underline"
          >
            Source <ExternalLink className="size-3" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
