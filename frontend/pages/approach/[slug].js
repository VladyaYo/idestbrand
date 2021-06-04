import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import Text from "../../components/text";
import { getStrapiMedia } from "../../lib/media";
import Hero from "../../components/hero";
import FullScreenVideo from "../../components/fullScreenVideo";
import FullScreenImage from "../../components/fullscreenImage";
import ContainerVideo from "../../components/containerVideo"
import ContainerImage from "../../components/containerImage";
import Breadcrumbs from "../../components/breadcrumbs";
import MoreProjects from "../../components/moreProjects";

const Approach = ({ project, seo, projects  }) => {
    // const imageUrl = getStrapiMedia(projects.image);
    // const example = Breadcrumbs()

    // const seo = {
    //     metaTitle: project.title,
    //     metaDescription: project.description,
    //     shareImage: project.image,
    //     article: true,
    // };
// console.log(params.slug)


    const renderContent = content => {
        switch (content.__component) {
            case 'sections.fullscreen-image' :
                return <FullScreenImage key={`${content.__component} + ${content.id}`} image={content}/>
            case 'sections.text' :
                return <Text key={`${content.__component} + ${content.id}`} text={content}/>
            case 'sections.video' :
                return <FullScreenVideo key={`${content.__component} + ${content.id}`} video={content}/>
            case 'sections.video-container' :
                return <ContainerVideo key={`${content.__component} + ${content.id}`} video={content}/>
            case 'sections.image' :
                return <ContainerImage key={`${content.__component} + ${content.id}`} image={content}/>
            default:
                return null
        }
    }
    return (
        <Layout pageClass="singleApproach">
            <Seo seo={seo} />
            <Breadcrumbs/>
            {/*<Hero hero={project.hero}/>*/}
            {/*{project.contentBlock.map((content) => renderContent(content))}*/}
            {/*<MoreProjects articles={projects} current={project}/>*/}
        </Layout>
    );
};

export async function getStaticPaths() {
    const projects = await fetchAPI("/approaches");
    return {
        paths: projects.map((project) => ({
            params: {
                slug: project.slug,
            },
        })),
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const [approach, approaches] = await Promise.all([
            fetchAPI(`/approaches?slug=${params.slug}`),
            fetchAPI("/approaches"),
        ]
    );

    return {
        props: { approach: approach[0], approaches },
        revalidate: 1,
    };
}

export default Approach;
