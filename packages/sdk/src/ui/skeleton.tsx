import { cn } from "@/ui/utils/cn";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-wk-background-secondary", className)} {...props} />;
}

export { Skeleton };
