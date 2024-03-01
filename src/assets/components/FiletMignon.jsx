import useScreenSize from "../../utils/useScreenSize";

function FiletMignon() {
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;

  return (
    <div className="flex flex-col mx-auto lg:flex-row lg:flex-row lg:space-x-12 lg:border-b lg:border-slate-50">
      {/* image */}
      {isLargeScreen ? (
        <img src="../images/homepage/beef-mobile.jpg" alt="" className="mb-8" />
      ) : (
        <img
          src="../images/homepage/beef-desktop-tablet.jpg"
          alt=""
          className="mb-8"
        />
      )}
      {/* content */}
      <div className="lg:flex-col">
        <h2 className="text-lg font-spartan font-semibold mb-2">
          Rosemary Filet Mignon
        </h2>
        <p className="text-sm font-light font-spartan leading-6 pb-12 border-b border-slate-50 lg:border-none">
          Our prime beef served to your taste with a delicious choice of
          seasonal sides.
        </p>
      </div>
    </div>
  );
}

export default FiletMignon;
