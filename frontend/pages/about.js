import React from "react";
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

const About = ({ projects, categories, about }) => {
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
    <Layout categories={categories} pageClass="aboutUs">
      {/* <Seo seo={homepage.seo} /> */}
      <Text text={about.mainText} />
      <Text text={about.communicationText} />
      {about.advantagesColumns && <Columns columns={about.advantagesColumns} className="adventagesColumns" />}
      <Text text={about.clientsText} />
      <Text text={about.servicesText} />
      <Articles articles={projects} count={4} />
      <section className="allPostBtn">
        <div className="container">
          <Link href="/projects">
            <a>{t.findOutMore}</a>
          </Link>
        </div>
      </section>
      {/* <FullScreenImage image={homepage.singleImage} />
      {homepage.productColumns && <Columns columns={homepage.productColumns} className="productColumns" />}
      {homepage.numericText ? <NumericText rows={homepage.numericText} /> : null}
      <Text text={homepage.commercial} />
      <CommercialProposal links={homepage.commercialLinks} /> */}
    </Layout>
  );
};

export async function getStaticProps({ locale = "en" }) {
  // Run API calls in parallel
  const [projects, about] = await Promise.all([
    fetchAPI(`/projects?_locale=${locale}`),
    fetchAPI(`/about-us?_locale=${locale}`),
  ]);

  return {
    props: { projects, about },
    revalidate: 1,
  };
}

export default About;
