import React from "react";
import Link from "next/link";


const CommercialProposal = ({links = []}) => {
    return (
            links && links.length ?
                (<section className="commercialProposal formsLinks">
                <div className="container">
                <div className="links">
                    {links.map((link) => {
                        return(
                            <Link key={link.id} href={link.link} >
                                <a target="_blank">{link.nameLink}</a>
                            </Link>
                        )
                    })}
                </div>
                </div>
            </section>)
                : null
    );
};

export default CommercialProposal;