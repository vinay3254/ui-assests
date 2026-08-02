"use client";

import OrbitingCirclesGlobeDemo from "@/components/ui/orbiting-circles-02";

// Removed duplicate use client

export default function DemoPage() {
  return (
    <div className="flex min-h-[500px] w-full flex-col items-center justify-center bg-background p-4">
      <h2 className="mb-4 text-2xl font-bold text-foreground">Orbiting Circles Demo</h2>
      <OrbitingCirclesGlobeDemo />
    </div>
  );
}
