import ChocolateMousse from "./ChocolateMousse";
import FiletMignon from "./FiletMignon";
import Salmon from "./Salmon";

function Highlight() {
  return (
    <div className="flex flex-col items-center text-white text-center justify-center py-14 px-6 space-y-12 bg-black lg:-mt-40 lg:pt-60 lg:px-20 ">
      <div className="flex flex-col space-y-10 lg:flex-row lg:text-start lg:space-y-0 lg:space-x-12 lg:items-start">
        <div className="flex flex-col items-center justify-center space-y-10 lg:items-start lg:-mt-12">
          {/* circle & border */}
          <div className="flex items-center space-x-2 ">
            <div className="h-2 w-2 rounded-full border-2 border-beaver"></div>
            <div className="w-[65px] border border-b-1 border-beaver"></div>
          </div>
          {/* contents */}
          <h2 className="text-2xl font-bold tracking-wide font-spartan max-w-lg lg:text-4xl">
            A few highlights from our menu
          </h2>
          <p className="font-light text-sm leading-8 font-spartan max-w-md lg:text-lg">
            We cater for all dietary requirments, but here's a glimpse at some
            of out diner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="lg:flex-col lg:space-y-8">
          <Salmon />
          <FiletMignon />
          <ChocolateMousse />
        </div>
      </div>
    </div>
  );
}

export default Highlight;
