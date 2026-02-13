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
  completed: "bg-emerald-100 text-emerald-800",
  "in-progress": "bg-blue-100 text-blue-800",
  planned: "bg-slate-100 text-slate-800",
};

export function ProjectCard({
  name,
  cost,
  status,
  description,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge className={statusStyles[status]}>{status}</Badge>
        </div>
        <CardDescription className="text-xl font-bold text-blue-700">
          {cost}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
      {sourceUrl && (
        <CardFooter>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-500 hover:underline"
          >
            Source <ExternalLink className="size-3" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
