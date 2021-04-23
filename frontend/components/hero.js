import React from "react";
import Layout from "./layout";
import {getStrapiMedia} from "../lib/media";


const Hero = ({ hero }) => {
    const videoUrl = getStrapiMedia(hero.video);
    return (
        <section className="hero">
            <video className='videoTag' autoPlay loop muted>
                <source src={videoUrl} type='video/mp4' />
            </video>
            <div className="container">
                <div className="text">
                    <h1>{hero.heading}</h1>
                    <p className="title">{hero.title}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;