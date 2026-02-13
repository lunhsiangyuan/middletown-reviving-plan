import { cn } from "@/lib/utils";

interface AIImageDisclaimerProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function AIImageDisclaimer({
  children,
  className,
  label = "AI-generated concept illustration",
}: AIImageDisclaimerProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
        <p className="text-xs text-white/80">{label}</p>
      </div>
    </div>
  );
}
