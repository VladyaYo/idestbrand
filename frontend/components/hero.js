import React from "react";
import Layout from "./layout";
import {getStrapiMedia} from "../lib/media";


const Hero = ({ hero }) => {
    const videoUrl = getStrapiMedia(hero.video);
    const textColor =  hero.black ? "black" : "white";

    return (
        <section className="hero">
            { hero.video.mime.indexOf('video') !== -1 ?
                <video className='videoTag' preload autoPlay playsinline loop muted>
                    <source src={videoUrl} type='video/mp4' />
                </video>
                :
                <img src={videoUrl} alt={hero.video.alternativeText}/>
            }
            <div className="container">
                <div className="text" style={{color:textColor}}>
                    <h1>{hero.heading}</h1>
                    <p className="title">{hero.title}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;