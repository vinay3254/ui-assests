//@ts-nocheck
'use client';

import React, { useEffect, useRef } from 'react';

export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);

  const randomColors = (count: number) => {
    return new Array(count)
      .fill(0)
      .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  };

  useEffect(() => {
    let isMounted = true;
    const scriptUrl = 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';

    const loadScript = async () => {
      try {
        let TubesCursorModule: any;
        if (typeof window !== 'undefined' && (window as any).TubesCursor) {
          TubesCursorModule = (window as any).TubesCursor;
        } else {
          // Dynamic import using Function to bypass Webpack build-time URL import restrictions
          const module = await new Function(`return import("${scriptUrl}")`)();
          TubesCursorModule = module.default;
        }

        if (isMounted && canvasRef.current && TubesCursorModule) {
          const app = TubesCursorModule(canvasRef.current, {
            tubes: {
              colors: ["#5e72e4", "#8965e0", "#f5365c"],
              lights: {
                intensity: 200,
                colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"]
              }
            }
          });
          appRef.current = app;
        }
      } catch (err) {
        console.error("Failed to load TubesCursor module:", err);
      }
    };

    const initTimer = setTimeout(loadScript, 100);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === 'function') {
        appRef.current.dispose();
      }
    };
  }, []);

  const handleClick = () => {
    if (appRef.current && appRef.current.tubes) {
      const newTubeColors = randomColors(3);
      const newLightColors = randomColors(4);
      if (typeof appRef.current.tubes.setColors === 'function') {
        appRef.current.tubes.setColors(newTubeColors);
      }
      if (typeof appRef.current.tubes.setLightsColors === 'function') {
        appRef.current.tubes.setLightsColors(newLightColors);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen w-screen bg-black font-['Montserrat',_sans-serif] overflow-hidden cursor-pointer relative"
    >
      <canvas ref={canvasRef} className="fixed inset-0 z-0 w-full h-full" />
      <div className="relative h-full flex flex-col items-center justify-center gap-2.5 z-10 pointer-events-none">
        <h1 className="m-0 p-0 text-white text-[80px] font-bold uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Tubes
        </h1>
        <h2 className="m-0 p-0 text-white text-[60px] font-medium uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Cursor
        </h2>
        <p className="m-0 p-0 text-white text-xl leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Click to change colors
        </p>
      </div>
    </div>
  );
}
