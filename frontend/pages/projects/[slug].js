import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import Hero from "../../components/hero";
// import { Breadcrumbs } from 'nextjs-breadcrumbs'

const Project = ({ project, seo  }) => {
    // const imageUrl = getStrapiMedia(projects.image);
    // const example = Breadcrumbs()

    // const seo = {
    //     metaTitle: project.title,
    //     metaDescription: project.description,
    //     shareImage: project.image,
    //     article: true,
    // };
// console.log(params.slug)
    return (
        <Layout >
            <Seo seo={seo} />
            <Hero hero={project.hero}/>
        </Layout>
    );
};

export async function getStaticPaths() {
    const projects = await fetchAPI("/projects");
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
    const projects = await fetchAPI(
        `/projects?slug=${params.slug}`
    );
    const categories = await fetchAPI("/categories");

    return {
        props: { projects: projects[0], categories },
        revalidate: 1,
    };
}

export default Project;
