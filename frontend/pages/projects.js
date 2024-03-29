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

const Projects = ({ allProjects, projects, categories }) => {
    const seo = {
        metaTitle: allProjects.heading,
        metaDescription: allProjects.about,
        article: false,
    };
    return (
        <Layout categories={categories} pageClass="allProjects">
            <Seo seo={seo} />
            <section className="head">
                <div className="container">
                    <div className="text">
                        <h1>{allProjects.heading}</h1>
                        <p>{allProjects.about}</p>
                    </div>
                </div>
            </section>
            <Articles articles={projects} />
        </Layout>
    );
};

export async function getStaticProps({locale="en"}) {
    // Run API calls in parallel
    const [projects, allProjects] = await Promise.all([
        fetchAPI(`/projects?_locale=${locale}`),
        fetchAPI(`/all-projects?_locale=${locale}`),
    ]);

    return {
        props: { allProjects, projects },
        revalidate: 1,
    };
}

export default Projects;
