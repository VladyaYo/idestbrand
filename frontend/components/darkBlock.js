import React from "react";


const DarkBlock = ({data, children})=>{
    return(
        <section className="darkBlock">
            <div className="container">
                {children}
            </div>
        </section>
    )
}
export default DarkBlock;