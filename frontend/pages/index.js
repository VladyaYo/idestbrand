import React from "react";
import classnames from "classnames"
import Text from "../components/text";
import Articles from "../components/articles";
import Columns from "../components/columns";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Hero from "../components/hero";
import FullScreenVideo from "../components/fullScreenVideo";
import {getStrapiMedia} from "../lib/media";
import FullScreenImage from "../components/fullscreenImage";
import NumericText from "../components/numericText";
import Footer from "../components/footer";
import CommercialProposal from "../components/comercialProposal"
import Link from "next/link";
import Image from "../components/image";

const StartPage = ({ homepage, startPage }) => {
  return (
      <>
          <Seo seo={homepage.seo} />
          <div className="startPageLayout">
              <div className="container">
                  <div className="logoStart">
                      <svg width="358" height="90" viewBox="0 0 358 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M208.896 76.1957L218.904 62.074C222.46 65.8064 226.734 68.7722 231.467 70.7908C236.2 72.8094 241.291 73.8385 246.433 73.8156C256.566 73.8156 261.491 69.1189 261.491 64.2954C261.491 58.0374 253.245 56.0709 243.458 53.7371C229.175 50.3312 211.611 46.1429 211.611 26.6904C211.517 12.0293 224.144 0.0337685 244.475 0.0337685C256.871 -0.431272 268.968 3.9215 278.255 12.1879L267.995 25.7384C261.05 19.5132 252.043 16.1181 242.739 16.2182C234.878 16.2182 230.458 19.7407 230.458 24.9768C230.458 30.4401 238.211 32.3014 247.594 34.5541C261.973 38.0064 280.18 42.3779 280.18 62.0422C280.18 77.9093 268.878 90 245.454 90C228.88 90 216.947 84.3831 208.896 76.1957ZM0 88.4133V1.33488H18.4366V88.4133H0ZM79.1146 88.4133C51.9647 88.4133 33.1493 71.1817 33.1493 44.9376C33.1493 18.6934 51.9647 1.33488 79.1146 1.33488H113.273V88.4133H79.1146ZM79.1146 72.102H94.8993V17.6462H79.1146C61.3409 17.6462 51.9647 29.5465 51.9647 44.9376C51.8117 48.5567 52.4102 52.1683 53.7221 55.5421C55.0341 58.916 57.0307 61.9782 59.5848 64.5336C62.1389 67.0891 65.1945 69.0818 68.5569 70.3849C71.9193 71.6879 75.5149 72.2727 79.1146 72.102ZM133.193 1.33488V88.4133H194.501V72.102H151.535V52.3951H193.585V36.052H151.535V17.6462H194.501V1.33488H133.193ZM314.181 17.6462V88.4133H332.744V17.6462H358V1.33488H288.926V17.6462H314.181Z" fill="black"/>
                      </svg>
                  </div>
                  <div className="grid">
                      {startPage.startPageItem.map((item) =>{
                          return(
                              <a key={item.id} href={item.link} className="item">
                                  <p className="text"><span>{item.name}</span> {item.direction}</p>
                                  <span className="image">
                                    <Image image={item.image}/>
                                </span>
                              </a>
                          )
                      })}
                  </div>
              </div>
          </div>
      </>
  );
}

export async function getStaticProps({locale="en"}) {
  // Run API calls in parallel
  const [homepage, startPage] = await Promise.all([
      fetchAPI(`/homepage?_locale=${locale}`),
      fetchAPI(`/start-page?_locale=${locale}`),
  ]);

  return {
    props: { homepage, startPage },
    revalidate: 1,
  };
}

export default StartPage;
