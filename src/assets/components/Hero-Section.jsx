import { motion } from "framer-motion";

const containerVarients = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
    },
  },
};

const wordingVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1.2,
    },
  },
};

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center text-center justify-center py-64 space-y-12 bg-hero-mobile bg-cover bg-no-repeat bg-center py-24 px-10 text-white font-spartan md:bg-hero-tablet md:py-60 md:pt-80 lg:py-20 lg:bg-hero-desktop lg:items-start lg:pl-24 lg:text-start lg:pb-60"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-semibold mt-32  md:text-6xl lg:-mt-8 lg:mb-24"
        variants={wordingVarients}
      >
        dine
      </motion.h1>
      <motion.h1
        className="text-4xl font-thin md:text-6xl lg:max-w-lg"
        variants={wordingVarients}
      >
        Exquisite dining since 1989
      </motion.h1>
      <motion.p
        className="font-light tracking-wide leading-7 max-w-md lg:text-lg "
        variants={wordingVarients}
      >
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </motion.p>
      <motion.button
        className="bg-transparent text-white font-bold px-16 py-4 trackin-widest border border-white uppercase hover:bg-white hover:text-black duration-500"
        variants={wordingVarients}
      >
        book a table
      </motion.button>
    </motion.div>
  );
}

export default HeroSection;
