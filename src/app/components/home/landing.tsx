"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Landing() {
  // Animation variants for the first section
  const pyramidVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 10,
      y: [-60, -40, 60, -80, 100, 0], // Creating the "A" shape
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5,
        delay: i * 0.3, // Stagger effect
        ease: "easeInOut",
      },
    }),
  };

  // Animation variants for the second section
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5,
        delay: i * 0.3, // Stagger effect
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="bg-[#f5f0f0] md:px-36 md:p-8 p-1 flex h-screen flex-col lg:flex-row md:space-x-8 items-center">
      <motion.div
        className="text-center md:translate-x-0 md:text-left md:w-1/2 w-full mb-8 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={pyramidVariants}
      >
        <motion.h1
          className="md:text-7xl text-4xl   font-bold md:mb-14 mb-2"
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          Mental health, reimagined for{" "}
          <span className="font-light font-serif">students</span>
        </motion.h1>

        <motion.h2
          className="md:text-2xl 0 mb-6 md:w-3/4"
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          Helping your students succeed and thrive with the help of licensed
          therapists and a community of peers. When and where they need it most.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          <Button className="bg-[#FF6B00]  text-black text-lg rounded-lg md:py-8 md:px-8 py-4 px-4">
            Join now
          </Button>
        </motion.div>
      </motion.div>

      {/* 2nd section */}
      <motion.div
        className="relative flex-1 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        custom={0} // Stagger effect
      >
        {/* First Image with GIF Background */}
        <motion.div
          className="absolute md:left-32 md:transform bottom-52  md:bottom-20"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={1}
        >
          <Image
            src={"/images/animationx1.gif"}
            alt="Background GIF"
            unoptimized
            width={800}
            height={800}
            className="rounded-lg md:max-w-lg max-w-xs md:-translate-x-44"
          />
        </motion.div>

        <div className="">
          <motion.div
            className="absolute md:bottom-0 bottom-0 md:left-52"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={2}
          >
            <Image
              src={"/images/arrowx3.gif"}
              alt="arrowx1"
              width={140}
              unoptimized
              height={300}
              className="rounded-lg rotate-90"
            />
          </motion.div>
          <motion.div
            className="md:absolute -rotate-90  md:left-48 z-10"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={3}
          >
            <Image
              src={"/images/arrowx2.gif"}
              alt="arrowx2"
              width={120}
              unoptimized
              height={300}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="absolute md:-top-12 top-44 left-[60%] md:-right-36  "
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={4}
          >
            <Image
              src={"/images/arrowx1.gif"}
              alt="arrow 1"
              width={100}
              unoptimized
              height={300}
              className="rounded-lg md:w-[30%] w-[40%] rotate-90"
            />
          </motion.div>
        </div>

        {/* Second Image */}
        <motion.div
          className="absolute md:top-1 top-4 -left-24  md:-left-32 md:transform md:-translate-y-24"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={5}
        >
          <Image
            src={"/images/animation2.gif"}
            alt="Person 2"
            width={350}
            unoptimized
            height={300}
            className="rounded-lg w-[50%]"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="md:absolute top-14 right-0 transform -translate-x-1"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={6}
        >
          <Image
            src={"/images/animation3.gif"}
            alt="Person 3"
            width={200}
            height={200}
            unoptimized
            className="rounded-lg"
          />
        </motion.div>

        {/* Connecting arrows */}
        {/* <div className="md:absolute flex items-center justify-center w-full h-full">
          {/* Add SVGs for arrows or connect them using the ::before or ::after pseudo-elements in Tailwind */}
        {/* </div>  */}
      </motion.div>
    </div>
  );
}
