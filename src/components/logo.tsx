import { Mountain } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Mountain className="h-6 w-6 text-primary" />
      <span className="text-lg font-semibold text-foreground">
        SnowBase Studio
      </span>
    </div>
  );
}
