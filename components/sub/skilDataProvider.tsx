'use client';

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkilDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVarints = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animateDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVarints}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animateDelay }}
    >
      <Image src={src} width={width} height={height} alt="skil image" />
    </motion.div>
  );
};

export default SkilDataProvider;
