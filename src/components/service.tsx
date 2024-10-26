"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ServiceComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (e) => console.log(e));
  return (
    <div className="bg-[url('/assets/paper_texture.png')] h-[200vh] bg-fixed w-full">
      <Image
        src={"/assets/white_paper.png"}
        className="w-screen h-screen z-0 fixed top-0 left-0"
        height={20}
        width={20}
        alt="Texture"
      />

      <div className="relative flex items-center justify-center w-full h-screen z-[1]">
        <motion.h1
          initial={{
            left: "-100%",
            opacity: 0,
          }}
          animate={{
            left: "8rem",
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute top-32 left-20 text-black font-bold text-2xl"
        >
          The Goods We Provide
        </motion.h1>

        <div className="flex justify-center text-gray-700 overflow-hidden">
          <div className="flex flex-col items-center justify-between ">
            <motion.h1 className="relative left-10 text-9xl">Website</motion.h1>
            <motion.p
              initial={{ bottom: "-100%" }}
              animate={{ bottom: 0 }}
              transition={{ duration: 1 }}
              className="relative bottom-0 w-[25rem]"
            >
              We specialize in designing, developing, and deploying websites and
              apps tailored to your unique needs. From creating stunning designs
              to launching high-performance solutions, our team ensures seamless
              delivery.
            </motion.p>
          </div>
          <motion.img
            src={"/assets/service_image1.png"}
            height={555}
            width={241}
            alt="Image"
            className="h-[555px] w-auto z-[1]"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          />
          <motion.h1 className="relative -left-10 self-end text-9xl z-[2]">
            Crafting
          </motion.h1>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full h-screen z-[1]">
        <motion.h1
          initial={{
            left: "-100%",
            opacity: 0,
          }}
          animate={{
            left: "8rem",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute top-32 left-20 text-black font-bold text-2xl"
        >
          The Goods We Provide
        </motion.h1>

        <div className="flex justify-center text-gray-700 overflow-hidden">
          <div className="flex flex-col items-center justify-between ">
            <motion.h1 className="relative left-10 text-9xl">Counse</motion.h1>
            <motion.p
              initial={{ bottom: "-100%" }}
              animate={{ bottom: 0 }}
              transition={{ duration: 1 }}
              className="relative bottom-0 w-[25rem]"
            >
              We provide personalized career counseling services for scholar,
              guiding them toward informed decisions about their educational and
              career paths, ensuring a successful future.
            </motion.p>
          </div>
          <motion.img
            src={"/assets/service_image2.png"}
            height={555}
            width={241}
            alt="Image"
            className="h-[555px] w-auto z-[1]"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          />
          <motion.h1 className="relative -left-10 self-end text-9xl z-[2]">
            lling
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
