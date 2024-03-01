import useScreenSize from "../../utils/useScreenSize";

function SingleBar() {
  const windowSize = useScreenSize();
  const isLargeScreen = windowSize >= 1024;

  return <div className="border-8 border-b-beaver w-14 p-12"></div>;
}

export default SingleBar;
