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
import Footer from "../components/footer";
import CommercialProposal from "../components/comercialProposal"
import Link from "next/link";

const Home = ({ projects, categories, homepage }) => {

    return (
        <Layout categories={categories} pageClass="mainPage">
            <Seo seo={homepage.seo} />
            <Hero hero={homepage.hero}/>
            <Text text={homepage.textBlock}/>
            <FullScreenVideo video={homepage.video}/>
            <Columns columns={homepage.columnsBlock} />
            <FullScreenImage image={homepage.singleImage}/>
            <NumericText rows={homepage.numericText}/>
            <Articles articles={projects} count={4} />
            <section className="allPostBtn">
                <div className="container">
                    <Link href="/projects">
                        <a>Find out more</a>
                    </Link>
                </div>
            </section>
            <Text text={homepage.commercial}/>
            <CommercialProposal links={homepage.commercialLinks}/>
        </Layout>
    );
}

export async function getStaticProps({locale = "en"}) {
    // Run API calls in parallel
    const [projects, homepage] = await Promise.all([
        fetchAPI(`/projects?_locale=${locale}`),
        fetchAPI(`/homepage?_locale=${locale}`),
    ]);

    return {
        props: { projects, homepage },
        revalidate: 1,
    };
}

export default Home;
