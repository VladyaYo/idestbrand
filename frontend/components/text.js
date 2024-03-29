import React from "react";
import MarkdownView from 'react-showdown';

const Text = ({text}) => {

    return (
        text ?
        <section className="textBlock">
            <div className="container">
                <div className="text">
                    {text.heading ? <h2>{text.heading}</h2> : null}
                    {text.about ?
                        <MarkdownView
                        markdown={text.about}
                        options={
                            { tables: true,
                                emoji: true,
                                literalMidWordUnderscores:true,
                            }}
                    />
                    :''}
                </div>
            </div>
        </section>
            : null
    );
};

export default Text;
