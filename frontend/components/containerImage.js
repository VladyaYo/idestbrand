import React from "react";
import {getStrapiMedia} from "../lib/media";


const ContainerImage = ({image}) => {
    const imageUrl = getStrapiMedia(image.image);
    return (
        <section className="containerImage">
            <div className="container">
                <img src={imageUrl} alt={image.alt}/>
            </div>
        </section>
    );
};

export default ContainerImage;