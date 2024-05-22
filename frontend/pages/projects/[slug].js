import React, { Component } from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Text from "../../components/text";
import Hero from "../../components/hero";
import FullScreenVideo from "../../components/fullScreenVideo";
import FullScreenImage from "../../components/fullscreenImage";
import ContainerVideo from "../../components/containerVideo";
import ContainerImage from "../../components/containerImage";
import Breadcrumbs from "../../components/breadcrumbs";
import MoreProjects from "../../components/moreProjects";
import {useRouter} from "next/router";
import ru from "../../public/locales/ru";
import ua from "../../public/locales/ua";
import en from "../../public/locales/en";


const Project = ({ project, seo, projects }) => {

  const router = useRouter();
  const {locale} = router;
  let t ;
  switch (locale) {
      case "ru-RU":
          t = ru;
          break;
      case "uk-UA":
          t = ua;
          break;
      default:
          t = en;
  };
  const renderContent = (content) => {
    switch (content.__component) {
      case "sections.fullscreen-image":
        return (
          <>
            <FullScreenImage
              key={`${content.__component} + ${content.id}`}
              image={content}
            />
          </>
        );
      case "sections.text":
        return (
          <Text key={`${content.__component} + ${content.id}`} text={content} />
        );
      case "sections.video":
        return (
          <FullScreenVideo
            key={`${content.__component} + ${content.id}`}
            video={content}
          />
        );
      case "sections.video-container":
        return (
          <ContainerVideo
            key={`${content.__component} + ${content.id}`}
            video={content}
          />
        );
      case "sections.image":
        return (
          <ContainerImage
            key={`${content.__component} + ${content.id}`}
            image={content}
          />
        );
      default:
        return null;
    }
  };
  return (
    <Layout pageClass="singleProject">
      <Seo seo={seo} />
      <Breadcrumbs />
      <Hero hero={project.hero} />
      {project.contentBlock.map((content) => renderContent(content))}
      {projects[1] ? (
        <section className="more">
          <div className="container">
            <h2>{t.moreProjects}</h2>
          </div>
        </section>
      ) : null}
      <MoreProjects articles={projects} current={project.id} link="projects" />
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const [project, projects] = await Promise.all([
    fetchAPI(`/projects?_locale=${locale}&slug=${params.slug}`),
    fetchAPI(`/projects?_locale=${locale}`),
  ]);

  return {
    props: { project: project[0], projects },
  };
}

export default Project;
