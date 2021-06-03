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
      <Text text={homepage.commercial}/>
      <CommercialProposal links={homepage.commercialLinks}/>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [projects, homepage] = await Promise.all([
      fetchAPI("/projects"),
    // fetchAPI("/articles?status=published"),
    // fetchAPI("/categories"),
    // fetchAPI("/projects"),
    // fetchAPI("/articles"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { projects, homepage },
    revalidate: 1,
  };
}

export default Home;
