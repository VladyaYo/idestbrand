import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ApproachesCard from "../components/approachCard";

const Approach = ({ allApproach, categories, approach }) => {
    const seo = {
        metaTitle: allApproach.mainHeading,
        metaDescription: allApproach.mainText,
        article: true,
    };
    return (
        <Layout categories={categories} pageClass="allApproach">
            <Seo seo={seo} />
            <section className="head">
                <div className="container">
                    <div className="text">
                        <h1>{allApproach.mainHeading}</h1>
                        <p>{allApproach.mainText}</p>
                    </div>
                </div>
            </section>
            <ApproachesCard articles={approach}/>
        </Layout>
    );
};

export async function getStaticProps({locale="en"}) {
    // Run API calls in parallel
    const [allApproach, approach] = await Promise.all([
        fetchAPI(`/all-approach?_locale=${locale}`),
        fetchAPI(`/approaches?_locale=${locale}`),
    ]);

    return {
        props: { allApproach, approach  },
        revalidate: 1,
    };
}

export default Approach;
