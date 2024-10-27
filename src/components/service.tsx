"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function ServiceComponent() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [scale, setScale] = useState<number>();
  const { scrollYProgress: target1 } = useScroll({
    target: ref1,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: target2 } = useScroll({
    target: ref2,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(target1, "change", (e) => {
    e = e * 2;
    if (e > 1) {
      e = 2 - e;
    }
    setScale(e);
  });

  useMotionValueEvent(target2, "change", (e) => {
    e = e * 2;
    if (e > 1) {
      e = 2 - e;
    }
    setScale(e);
  });
  return (
    <div className="bg-[url('/assets/paper_texture.png')] bg-fixed w-full">
      <Image
        src={"/assets/white_paper.png"}
        className="w-screen h-screen z-0 fixed top-0 left-0"
        height={20}
        width={20}
        alt="Texture"
      />

      <div className="h-[600vh] w-full" ref={ref2}>
        <div className="sticky top-0 left-0 flex items-center justify-center w-full h-screen z-[1]">
          <div className="flex justify-center text-gray-700 overflow-hidden">
            <div className="flex flex-col items-center justify-between ">
              <motion.h1
                className="relative left-10 text-9xl origin-top opacity-0"
                style={{ opacity: scale }}
              >
                Counse
              </motion.h1>
              <motion.p
                initial={{ bottom: "-100%" }}
                animate={{ bottom: 0 }}
                transition={{ duration: 1 }}
                className="relative bottom-0 w-[25rem] opacity-0"
                style={{ opacity: scale }}
              >
                We provide personalized career counseling services for scholar,
                guiding them toward informed decisions about their educational
                and career paths, ensuring a successful future.
              </motion.p>
            </div>
            <motion.img
              src={"/assets/service_image2.png"}
              height={555}
              width={241}
              alt="Image"
              className="h-[555px] w-auto z-[1]"
              style={{
                opacity: scale,
              }}
            />
            <motion.h1
              className="relative -left-10 self-end text-9xl z-[2] origin-bottom opacity-0"
              style={{ opacity: scale }}
            >
              lling
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="h-[600vh] w-full" ref={ref2}>
        <div className="sticky top-0 left-0 flex items-center justify-center w-full h-screen z-[1]">
          <div className="flex justify-center text-gray-700 overflow-hidden">
            <div className="flex flex-col items-center justify-between ">
              <motion.h1
                className="relative left-10 text-9xl origin-top"
                style={{ opacity: scale }}
              >
                Counse
              </motion.h1>
              <motion.p
                initial={{ bottom: "-100%" }}
                animate={{ bottom: 0 }}
                transition={{ duration: 1 }}
                className="relative bottom-0 w-[25rem]"
                style={{ opacity: scale }}
              >
                We provide personalized career counseling services for scholar,
                guiding them toward informed decisions about their educational
                and career paths, ensuring a successful future.
              </motion.p>
            </div>
            <motion.img
              src={"/assets/service_image2.png"}
              height={555}
              width={241}
              alt="Image"
              className="h-[555px] w-auto z-[1] origin-left object-contain"
              style={{
                clipPath: `0 0, ${scale} 0, ${scale} ${scale}, 0 ${scale}`,
              }}
            />
            <motion.h1
              className="relative -left-10 self-end text-9xl z-[2] origin-bottom"
              style={{ opacity: scale }}
            >
              lling
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}
