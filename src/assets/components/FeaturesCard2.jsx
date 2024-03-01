import useScreenSize from "../../utils/useScreenSize";
import { motion } from "framer-motion";

function FeaturesCard() {
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;

  return (
    <div className="flex flex-col-reverse flex-row-revers items-center justify-center mb-24 space-y-12 text-center px-8 lg:flex-row lg:space-y-0 lg:space-x-16 ">
      <motion.div
        className="flex flex-col items-center justify-center space-y-12 lg:items-start"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* circle & border */}
        <div className="flex items-center space-x-2 mt-12 md:mt-0">
          <div className="h-2 w-2 rounded-full border-2 border-beaver"></div>
          <div className="w-[65px] border border-b-1 border-beaver"></div>
        </div>
        {/* Content */}
        <div className="flex flex-col text-center space-y-8  max-w-md lg:text-start ">
          <h1 className="text-3xl font-bold mb-4 lg:text-4xl">
            The most locally sourced food
          </h1>
          <p className="text-md lg:text-lg">
            All out ingredients come directly from our farm or local fishery. So
            you can be sure that you're eating the freshest, most sustainable
            food.
          </p>
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        className="shadow-2xl "
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {isLargeScreen ? (
          <img src="../images/homepage/locally-sourced-mobile.jpg" alt="" />
        ) : (
          <img src="../images/homepage/locally-sourced-desktop.jpg" alt="" />
        )}
      </motion.div>
    </div>
  );
}

export default FeaturesCard;
