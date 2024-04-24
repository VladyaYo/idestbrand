import React from "react";
import classnames from "classnames";
import MarkdownView from "react-showdown";


const RichColumns = ({columns, className}) => {

    const classNames = classnames(
        'columnsText',
        'richColumns',
        className
    );
    return (
        <section className={classNames}>
         <div className="container">
         {columns.heading && <p className='h1'>{columns.heading ? columns.heading[0].toUpperCase() + columns.heading.slice(1) : ""}</p>}
             <div className="columns">
                 {columns.richTextBlock.map((column) => {
                     return(
                         <div key={column.id}
                              className="item"
                         >
                           <MarkdownView
                            markdown={column.text}
                            options={
                            { 
                                emoji: true,
                                literalMidWordUnderscores:true,
                            }}
                            />
                         </div>
                     );
                 })}
             </div>
         </div>
        </section>
    );
};

export default RichColumns;