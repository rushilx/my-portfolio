"use client";

import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <DynamicLottie {...defaultOptions} />
  );
};

export default AnimationLottie;