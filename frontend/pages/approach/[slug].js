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

const Approach = ({ approach, approaches  }) => {
    // const imageUrl = getStrapiMedia(approach.image);
    const example = Breadcrumbs()

    const seo = {
        metaTitle: approach.title,
        metaDescription: approach.description,
        shareImage: approach.image,
        article: true,
    };



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
            {/*<Seo seo={seo} />*/}
            <Breadcrumbs/>
            <Hero hero={approach.Hero}/>
            {approach.contentBlock.map((content) => renderContent(content))}
            <MoreProjects articles={approaches} current={approach.id} link="/approach/"/>
        </Layout>
    );
};

export async function getStaticPaths() {
    const approaches = await fetchAPI("/approaches");
    return {
        paths: approaches.map((approach) => ({
            params: {
                slug: approach.slug,
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
