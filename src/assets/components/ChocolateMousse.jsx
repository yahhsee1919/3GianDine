import useScreenSize from "../../utils/useScreenSize";

function ChocolateMousse() {
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;

  return (
    <div className="flex flex-col mx-auto lg:flex-row lg:flex-row lg:space-x-12">
      {/* image */}
      {isLargeScreen ? (
        <img
          src="../images/homepage/chocolate-mobile.jpg"
          alt=""
          className="mb-8"
        />
      ) : (
        <img
          src="../images/homepage/chocolate-desktop-tablet.jpg"
          alt=""
          className="mb-8"
        />
      )}

      {/* content */}
      <div className="lg:flex-col">
        <h2 className="text-lg font-spartan font-semibold mb-2">
          Summer Fruit Chocolate Mousse
        </h2>
        <p className="text-sm font-light font-spartan leading-6 pb-12 ">
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </div>
    </div>
  );
}

export default ChocolateMousse;
