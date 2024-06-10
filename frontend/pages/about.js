import React from "react";
import Text from "../components/text";
import Articles from "../components/articles";
import Columns from "../components/columns";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ContainerImage from "../components/containerImage";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";
import RichColumns from "../components/richColumns";

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
      <Text text={about?.mainText} />
      {about.image1 ?
      <ContainerImage
            image={about?.image1}
          />
        : null}
      <Text text={about?.communicationText} />
      {about.image2 && <ContainerImage
            image={about?.image2}
          />
          }
      {about.advantagesColumns && <Columns columns={about?.advantagesColumns} className="adventagesColumns marker" />}
      {about.image3 && <ContainerImage
            image={about?.image3}
          />}
      <Text text={about?.clientsText} />
      {/* {about.image4 ? 
      <ContainerImage
           image={about?.image4}
          /> : null}  */}
      <Text className="uppercase" text={about?.servicesText} />
      <RichColumns columns={about?.markdownColumns} className="adventagesColumns markerOdd" />
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
