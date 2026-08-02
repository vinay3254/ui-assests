"use client";

import PhoneMockupBasic from "@/components/ui/phone-mockups-1";

export default function Default() {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-center bg-background text-foreground p-6">
      <h2 className="mb-6 text-2xl font-bold">Interactive Phone Mockup Carousel</h2>
      <PhoneMockupBasic />
    </div>
  );
}
