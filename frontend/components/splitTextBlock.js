import React from "react";
import MarkdownView from 'react-showdown';
import classnames from "classnames";


const SplitTextBlock = ({text, className}) => {

    const classNames = classnames(
        'columnsText',
        'splitText',
        className
    );

    return (
        text &&
        <section className="splitTextBlock">
            <div className="container">
                <div className="text">
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
                <div className="list">
                    <ul>
                    {text.TextList && text.TextList.map((item) =>{
                        return(
                            <li key={item.id}>
                            {item.Item}
                        </li>
                        )
                    })}
                    </ul> 
                </div>
            </div>
        </section>
    );
};

export default SplitTextBlock;
