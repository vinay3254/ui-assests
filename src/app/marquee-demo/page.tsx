"use client";

import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path"

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5"

export default function MarqueeAlongSvgPathDemo() {
  return (
    <div className="w-dvw h-dvh bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      <MarqueeAlongSvgPath
        path={path}
        viewBox="0 0 996 330"
        baseVelocity={8}
        slowdownOnHover={true}
        draggable={true}
        repeat={2}
        dragSensitivity={0.1}
        className="w-full h-full scale-105"
        responsive
        grabCursor
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className="w-14 h-20 hover:scale-150 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <img
              src={img.src}
              alt={`Example ${i}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </MarqueeAlongSvgPath>
    </div>
  )
}

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80",
    link: "#",
  },
]
