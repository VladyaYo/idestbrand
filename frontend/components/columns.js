import React from "react";
import classnames from "classnames";


const Columns = ({columns, className}) => {

    const classNames = classnames(
        'columnsText',
        className
    );
    return (
        <section className={classNames}>
         <div className="container">
             <p className='h1'>{columns.heading ? columns.heading : ""}</p>
             <div className="columns">
                 {columns.columnItem.map((column) => {
                     return(
                         <div key={column.id}
                              className="item"
                         >
                           <h2>{column.heading ? column.heading : null}</h2>
                           <p>{column.textColumn ? column.textColumn : null}</p>
                         </div>
                     );
                 })}
             </div>
         </div>
        </section>
    );
};

export default Columns;