import React from "react";
import classnames from "classnames"
import Text from "../components/text";
import Articles from "../components/articles";
import Columns from "../components/columns";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Hero from "../components/hero";
import FullScreenVideo from "../components/fullScreenVideo";
import {getStrapiMedia} from "../lib/media";
import FullScreenImage from "../components/fullscreenImage";
import NumericText from "../components/numericText";
import MoreProjects from "../components/moreProjects";
import Footer from "../components/footer";
import ApproachesCard from "../components/approachCard";

const Approach = ({ allApproach, projects, categories, approach }) => {
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
        // fetchAPI("/approaches?status=published"),
        // fetchAPI("/categories"),
        // fetchAPI("/homepage"),
    ]);

    return {
        props: { allApproach, approach  },
        revalidate: 1,
    };
}

export default Approach;
