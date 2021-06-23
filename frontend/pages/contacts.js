import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Contacts = ({ contacts, homepage }) => {
    return (
        <Layout pageClass="contactsPage">
            <Seo seo={homepage.seo} />
            <section className="head">
            <div className="container">
                <h1>{contacts.mainHeading}</h1>
            </div>
            </section>
            <section className="contacts">
                <div className="container">
                    { contacts.contact.map((item)=>{
                        return(
                        <div key={item.heading + item.id} className="item">
                            <h2>{item.heading}</h2>
                            <p>{item.about}</p>
                            <a href={`mailto:${item.link}`} target="_blank">{item.link}</a>
                        </div>
                        )
                    })
                    }
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const [contacts, homepage] = await Promise.all([
        fetchAPI("/contacts"),
        fetchAPI("/homepage"),
    ]);

    return {
        props: { contacts, homepage },
        revalidate: 1,
    };
}

export default Contacts;
