import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface BusinessCardProps {
  name: string;
  type: string;
  address: string;
  description: string;
  specialties: string[];
}

export function BusinessCard({
  name,
  type,
  address,
  description,
  specialties,
}: BusinessCardProps) {
  return (
    <Card className="flex h-full cursor-pointer flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <CardDescription className="text-xs">{address}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm text-slate-600">{description}</p>
        {specialties.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {specialties.map((specialty) => (
              <Badge
                key={specialty}
                variant="outline"
                className="text-xs font-normal"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
