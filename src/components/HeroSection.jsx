import React from "react";
import {motion} from "framer-motion";
import heroImage from "../assets/wallbg.jpg";
import Nav from "./Nav";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      
      {/* Hero Section */}
      <motion.section
        className="relative w-full min-h-[80vh] md:h-[110%] p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <Nav/> */}
        {/* Full Display Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="Delicious Food"
            className="w-full h-full object-cover object-center"
          />
          {/* Multiple overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
            }}
          ></div>
        </div>

        {/* Animated Background Elements - Hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute top-20 left-16 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl md:blur-2xl opacity-20"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="hidden sm:block absolute bottom-32 right-20 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-lg md:blur-xl opacity-25"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="hidden sm:block absolute top-1/3 right-1/3 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-md md:blur-lg opacity-20"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        ></motion.div>

{/* Floating Food Icons with 3D animation */}
<motion.div
  className="hidden sm:block absolute top-24 right-32 text-6xl md:text-8xl opacity-20 select-none"
  animate={{
  y: [-20, 40, -20],
  x: [-30, 40, -10],
  rotate: [0, 10, -10, 0],
  rotateX: [0, 20, -20, 0],
  rotateY: [0, -15, 15, 0],
  scale: [1, 1.1, 1],
}}

  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
>
  🍕
</motion.div>

<motion.div
  className="hidden sm:block absolute bottom-40 left-32 text-4xl md:text-9xl opacity-15 select-none"
  animate={{
    y: [20, -20, 20],
    rotate: [0, -15, 15, 0],
    rotateX: [0, 25, -25, 0],
    rotateY: [0, -10, 10, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
>
  🍔
</motion.div>

<motion.div
  className="hidden sm:block absolute top-40 left-1/4 text-2xl md:text-8xl opacity-10 select-none"
  animate={{
    y: [-20, 15, -15],
    x: [-10, 20, -10],
    rotate: [0, 5, -5, 0],
    rotateY: [0, 15, -15, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
>
  🍜
</motion.div>


        {/* Main Content */}
        <div className="relative z-10 text-center mt-12 sm:mt-10 text-white px-2 sm:px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
            <span className="inline-flex items-center mt-20 px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 bg-opacity-20 backdrop-blur-md rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6 border border-yellow-400 border-opacity-30 shadow-lg">
              <span className="mr-1 sm:mr-2">⚡</span>
              Lightning Fast Delivery
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight sm:leading-none"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Your Craving,
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              Delivered.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
            variants={itemVariants}
          >
            Experience the{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              fastest food delivery
            </span>{" "}
            service with a wide variety of{" "}
            <span className="font-bold text-pink-300">delicious meals</span>{" "}
            right to your doorstep.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="bg-transparent text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg border border-white border-opacity-30 backdrop-blur-md hover:bg-white hover:text-black"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("food-items-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="relative z-10 flex text-amber-400 items-center">
                Order Now
                <span className="ml-2 sm:ml-3 font-bold text-lg sm:text-xl">
                  →
                </span>
              </span>
            </motion.button>

            <motion.button
              className="bg-transparent text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg border border-white border-opacity-30 backdrop-blur-md hover:bg-white hover:text-black"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex text-amber-400 items-center">
                View Menu
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div
              className="text-center p-4 sm:p-5 md:p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white border-opacity-10 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black  bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                <span>15min</span>
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-500 font-medium">
                Average Delivery
              </div>
            </motion.div>
            <motion.div
              className="text-center p-4 sm:p-5 md:p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white border-opacity-10 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-500 font-medium">
                Restaurant Partners
              </div>
            </motion.div>
            <motion.div
              className="text-center p-4 sm:p-5 md:p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white border-opacity-10 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                50k+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-500 font-medium">
                Happy Customers
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
