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
        article: true,
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
            {/*<Seo seo={homepage.seo} />*/}
            {/*<Hero hero={allProjects.hero}/>*/}
            {/*<Text text={homepage.textBlock}/>*/}
            {/*<FullScreenVideo video={homepage.video}/>*/}
            {/*<Columns columns={homepage.columnsBlock} />*/}
            {/*<FullScreenImage image={homepage.singleImage}/>*/}
            {/*<NumericText rows={homepage.numericText}/>*/}
            {/*/!*<p>{homepage.columnsBlock}</p>*!/*/}
            {/*/!*<div className="uk-section">*!/*/}
            {/*/!*  <div className="uk-container uk-container-large">*!/*/}
            {/*<Articles articles={projects} count={4} />*/}
              {/*</div>*/}
            {/*/!*</div>*!/*/}
        </Layout>
    );
};

export async function getStaticProps({locale="en"}) {
    // Run API calls in parallel
    const [projects, allProjects] = await Promise.all([
        fetchAPI(`/projects?_locale=${locale}`),
        fetchAPI(`/all-projects?_locale=${locale}`),
        // fetchAPI("/articles?status=published"),
        // fetchAPI("/categories"),
        // fetchAPI("/homepage"),
    ]);

    return {
        props: { allProjects, projects },
        revalidate: 1,
    };
}

export default Projects;
