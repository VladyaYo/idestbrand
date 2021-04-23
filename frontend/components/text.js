import React from "react";


const Text = ({text}) => {
    return (
        <section className="textBlock">
            <div className="container">
                <div className="text">
                    {text.heading ? <h2>{text.heading}</h2> : ''}
                    {text.about ? <p>{text.about}</p>:''}
                </div>
            </div>
        </section>
    );
};

export default Text;
