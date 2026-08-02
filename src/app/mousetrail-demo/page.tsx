"use client";

import ImageMouseTrail3 from '@/components/ui/image-mousetrail-without-component';

export default function ImageMouseTrailDemo() {
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center min-h-screen bg-background'>
      <h2 className="mb-4 text-2xl font-bold text-foreground">Image Mouse Trail Demo</h2>
      <ImageMouseTrail3 />
    </div>
  );
}
