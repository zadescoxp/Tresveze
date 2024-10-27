"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Test() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [opac, setOpac] = useState<number>();
  const { scrollYProgress: target1 } = useScroll({
    target: ref1,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: target2 } = useScroll({
    target: ref2,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(target1, "change", (e) => {
    console.log(e);
    e = e * 2;
    if (e > 0.5) {
      e = 2 - e;
    }
    setOpac(e);
  });
  useMotionValueEvent(target2, "change", (e) => {
    console.log(e);
    e = e * 2;
    if (e > 0.5) {
      e = 2 - e;
    }
    setOpac(e);
  });

  return (
    <div className="">
      <div className="h-[200vh] w-screen" ref={ref1}>
        <div className="h-screen w-full sticky top-0 left-0 flex items-center justify-center">
          <h1
            className="text-4xl font-bold uppercase"
            style={{ opacity: opac }}
          >
            This is some text
          </h1>
        </div>
      </div>

      <div className="h-[150vh] w-screen" ref={ref2}>
        <div className="h-screen w-full sticky top-0 left-0 flex items-center justify-center">
          <h1
            className="text-4xl font-bold uppercase"
            style={{ opacity: opac }}
          >
            Maybe something I&apos;m wondering
          </h1>
        </div>
      </div>
    </div>
  );
}
