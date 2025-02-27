import React, { useEffect } from "react";
import Text from "../components/text";
import Articles from "../components/articles";
import Columns from "../components/columns";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Hero from "../components/hero";
import FullScreenVideo from "../components/fullScreenVideo";
import FullScreenImage from "../components/fullscreenImage";
import NumericText from "../components/numericText";
import CommercialProposal from "../components/comercialProposal";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";
import CommercialFormBlock from "../components/comercialFormBlock";
import TagManager from "react-gtm-module";

const Home = ({ projects, categories, homepage }) => {
  
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KWR4KXG2' });
  }, []);

  const router = useRouter();
  const { locale } = router;
  let t;
  switch (locale) {
    case "ru-RU":
      t = ru;
      break;
    case "uk-UA":
      t = ua;
      break;
    default:
      t = en;
  }

  return (
    <Layout categories={categories} pageClass="mainPage">
      <Seo seo={homepage.seo} />
      <Hero hero={homepage.hero} />
      <Text text={homepage.textBlock} />
      <FullScreenVideo video={homepage.video} />
      <Columns columns={homepage.columnsBlock} />
      <FullScreenImage image={homepage.singleImage} />
      {homepage.productColumns && <Columns columns={homepage.productColumns} className="productColumns" />}
      {homepage.numericText ? <NumericText rows={homepage.numericText} /> : null}
      <Articles articles={projects} count={4} />
      <section className="allPostBtn">
        <div className="container">
          <Link href="/projects">
            <a>{t.findOutMore}</a>
          </Link>
        </div>
      </section>
      <Text text={homepage.commercial} />
      <CommercialProposal links={homepage.commercialLinks} />
      <CommercialFormBlock/>
    </Layout>
  );
};

export async function getStaticProps({ locale = "en" }) {
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
