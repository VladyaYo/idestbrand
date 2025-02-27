import React, { useEffect } from "react";
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
import TagManager from "react-gtm-module";

const Services = ({ services, service, categories }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KWR4KXG2' });
  }, []);

  const seo = {
      metaTitle: services.heading,
      metaDescription: services.about,
      article: false,
  };
  return (
      <Layout categories={categories} pageClass="allProjects">
          <Seo seo={seo} />
          <section className="head">
              <div className="container">
                  <div className="text">
                      <h1>{service.heading}</h1>
                      <p>{service.about}</p>
                  </div>
              </div>
          </section>
          <Articles articles={services} path="services" />
      </Layout>
  );
};

export async function getStaticProps({locale="en"}) {
  // Run API calls in parallel
  const [service, services] = await Promise.all([
      fetchAPI(`/services?_locale=${locale}`),
      fetchAPI(`/service-collections?_locale=${locale}`),
  ]);

  return {
      props: { service, services },
      revalidate: 1,
  };
}

export default Services;