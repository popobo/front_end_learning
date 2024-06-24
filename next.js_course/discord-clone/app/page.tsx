import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = true;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone!</p>
      <Button variant="ghost" className="bg-indigo-500">
        Click me
      </Button>
      <Button
        className={cn("bg-indigo-500", state ? "text-white" : "text-black")}
      >
        Click me
      </Button>
    </div>
  );
}
