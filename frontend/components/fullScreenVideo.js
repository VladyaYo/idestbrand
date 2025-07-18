import React from "react";
import dynamic from 'next/dynamic'
import { getStrapiMedia } from "../lib/media";
import useWindowSize from "../utils/useWindowSize";
// import Vimeo from "@u-wave/react-vimeo";
const Vimeo = dynamic(() => import('@u-wave/react-vimeo'), { ssr: false })

const FullScreenVideo = ({ video }) => {
  // const videoUrl = getStrapiMedia(video.video);
  // const vimeoLink = video.link;
  const { width } = useWindowSize();

  const renderVideo = (item) => {
    if (item.link) {
      return <Vimeo video={item.link} autoplay={true} muted />;
    } else if (item.video && width > 768) {
      return (
        <video className="videoTag" autoPlay playsInline loop muted>
          <source src={getStrapiMedia(item.video)} type="video/mp4" />
        </video>
      );
    } else if (item.mobile) {
      return <img src={getStrapiMedia(item.mobile)} alt="mobile" />;
    }
  };
  return <section className="fullscreenVideo">{renderVideo(video)}</section>;
};
export default FullScreenVideo;
