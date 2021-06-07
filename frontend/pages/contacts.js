import React from "react";
import classnames from "classnames"
import Text from "../components/text";
import Articles from "../components/articles";
import Columns from "../components/columns";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Contacts = ({ contacts, categories, homepage }) => {

    return (
        <Layout pageClass="contactsPage">
            <Seo seo={homepage.seo} />
            <section>
            <div className="container">
                <h1>{contacts.mainHeading}</h1>
            </div>
            </section>
            <section className="contacts">
                <div className="container">
                    { contacts.contact.map((item)=>{
                        return(
                        <div className="item">
                            <h2>{item.heading}</h2>
                            <p>{item.about}</p>
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
    // Run API calls in parallel
    const [contacts, homepage] = await Promise.all([
        fetchAPI("/contacts"),
        // fetchAPI("/articles?status=published"),
        // fetchAPI("/categories"),
        // fetchAPI("/projects"),
        // fetchAPI("/articles"),
        fetchAPI("/homepage"),
    ]);

    return {
        props: { contacts, homepage },
        revalidate: 1,
    };
}

export default Contacts;
