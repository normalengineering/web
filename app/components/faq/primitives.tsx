import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function KeyFeature({
  icon: Icon,
  children,
  tint = "text-zinc-500",
}: {
  icon: LucideIcon;
  children: ReactNode;
  tint?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${tint}`} />
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
    <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/40 p-4 space-y-3">
      <p className="flex items-center gap-2 text-white font-medium text-sm">
        <Icon className="h-4 w-4 shrink-0 text-zinc-400" />
        {title}
      </p>
      {children}
    </div>
  );
}
