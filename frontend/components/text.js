import React from "react";
import MarkdownView from 'react-showdown';
import classnames from "classnames";


const Text = ({text, className}) => {

    const classNames = classnames(
        'columnsText',
        className
    );

    return (
        text &&
        <section className="textBlock">
            <div className="container">
                <div className="text">
                    {text.heading ? <h2 className={className==="uppercase" && "h1"}>{text.heading}</h2> : null}
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
    );
};

export default Text;
