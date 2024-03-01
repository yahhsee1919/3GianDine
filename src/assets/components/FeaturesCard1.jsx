import useScreenSize from "../../utils/useScreenSize";
import { motion } from "framer-motion";

function FeaturesCard() {
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;
  return (
    <div className="flex flex-col items-center justify-center space-y-12 text-center px-8  mb-24  lg:flex-row lg:space-y-0 lg:space-x-16 lg:mb-44">
      {/* image */}
      <motion.div
        className="shadow-2xl"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {isLargeScreen ? (
          <img src="../images/homepage/enjoyable-place-mobile.jpg" alt="" />
        ) : (
          <img src="../images/homepage/enjoyable-place-desktop.jpg" alt="" />
        )}
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center space-y-12 lg:items-start"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* circle & border */}
        <div className="flex items-center space-x-2 ">
          <div className="h-2 w-2 rounded-full border-2 border-beaver"></div>
          <div className="w-[65px] border border-b-1 border-beaver"></div>
        </div>
        {/* Content */}
        <div className="flex flex-col text-center space-y-8  max-w-md lg:text-start ">
          <h1 className="text-3xl font-bold mb-4 lg:text-4xl">
            Enjoyable place for all the family
          </h1>
          <p className="text-md lg:text-lg">
            Out relaxed surroundigns make dining with us a great experience for
            everyone. We can even arrange a tour of the famr before your meal.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default FeaturesCard;
