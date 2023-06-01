import React from "react";
import Lottie from "react-lottie";
//import LottieLoader from "../public/animation/loader.json";

function Loader({ showLoader }) {
  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../public/animation/loader.json"), // Path to your Lottie animation JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      {showLoader && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Lottie options={loaderOptions} height={230} width={230} />
        </div>
      )}
    </div>
  );
}

export default Loader;
