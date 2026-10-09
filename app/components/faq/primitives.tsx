import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function KeyFeature({
  icon: Icon,
  children,
  tint = "text-faint",
}: {
  icon: LucideIcon;
  children: ReactNode;
  tint?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`h-4 w-4 shrink-0 mt-1 ${tint}`} />
      <p>{children}</p>
    </div>
  );
}

export function KeyCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-line bg-raised p-5 space-y-3">
      <p className="flex items-center gap-2.5 font-medium text-ink-strong">
        <Icon className="h-4 w-4 shrink-0 text-sage" />
        {title}
      </p>
      {children}
    </div>
  );
}
