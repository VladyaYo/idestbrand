import React from "react";

const NumericText = ({rows}) => {
    return (
        <section className="numericText">
            <div className="container">
                <h2>{rows.heading ? rows.heading : null}</h2>
                <div className="text">
                    {rows.items.map((item) => {
                    return(
                        <div className="item"
                        key={item.id}>
                            <h2>{item.heading ? item.heading : null}</h2>
                            <p>{item.textColumn ? item.textColumn : null}</p>
                        </div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NumericText;