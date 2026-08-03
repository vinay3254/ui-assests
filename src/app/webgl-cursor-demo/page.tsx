"use client";

import WebGLCursor from "@/components/ui/webgl-cursor";

export default function WebGLCursorDemo() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-white p-8 overflow-hidden">
      <WebGLCursor />
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">WebGL Glowing Cursor Trail</h1>
        <p className="text-zinc-400 mb-6">
          Move your mouse around to create dynamic glowing trails and click anywhere to trigger a ripple effect.
        </p>
      </div>
    </div>
  );
}
