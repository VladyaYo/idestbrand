import React from "react";


const Columns = ({columns}) => {
    const columnsLength = columns.columnItem.length
    return (
        <section className="columnsText">
         <div className="container">
             <p className='h1'>{columns.heading}</p>
             <div className="columns">
                 {columns.columnItem.map((column) => {
                     return(
                         <div key={column.id}
                              className="item"
                              style={{width:'calc(100% /' + columnsLength + ' - 15px)'}}
                         >
                           <h2>{column.heading}</h2>
                           <p>{column.textColumn}</p>
                         </div>
                     );
                 })}
             </div>
         </div>
        </section>
    );
};

export default Columns;