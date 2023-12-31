import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import SkeletonGithubCard from "../githubProject/skeletonGithubCard";

type DisplayLottieProps = {
  animationData: any;
};

export default class DisplayLottie extends Component<DisplayLottieProps> {
  render() {
    const { animationData } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<SkeletonGithubCard />}>
        <Lottie
          classID="p-0"
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
