import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { EmailShareButton, FacebookShareButton, } from 'react-share';
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
import {useRouter} from "next/router";

const Approach = ({ approach, approaches  }) => {
    // const imageUrl = getStrapiMedia(approach.image);
    const example = Breadcrumbs();
    const router = useRouter();
    const seo = {
        metaTitle: approach.name,
        metaDescription: approach.Hero.title,
        shareImage: approach.Hero.video,
        article: true,
    };
    // const linkPage = window.location.href
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
            <Hero hero={approach.Hero}/>
            <section className="share">
                <div className="container">
                    <div className="buttons">
                        <FacebookShareButton
                            // url={window.location.hostname + router.asPath}
                            text={approach.name}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0.666687C6.63602 0.666687 0.666687 6.67236 0.666687 14.0812C0.666687 20.7764 5.54269 26.3259 11.9174 27.3334V17.958H8.53069V14.0812H11.9174V11.126C11.9174 7.76429 13.9067 5.90773 16.9534 5.90773C18.412 5.90773 19.9374 6.16931 19.9374 6.16931V9.46928H18.2574C16.6 9.46928 16.084 10.5035 16.084 11.5646V14.0812H19.7814L19.1907 17.958H16.084V27.3334C22.4574 26.3273 27.3334 20.775 27.3334 14.0812C27.3334 6.67236 21.364 0.666687 14 0.666687Z" fill="black"/>
                            </svg>
                        </FacebookShareButton>
                        <EmailShareButton
                            // url={window.location.hostname + router.asPath}
                            text={approach.name}>
                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00002 0H26C26.3536 0 26.6928 0.140476 26.9428 0.390524C27.1929 0.640573 27.3334 0.979711 27.3334 1.33333V22.6667C27.3334 23.0203 27.1929 23.3594 26.9428 23.6095C26.6928 23.8595 26.3536 24 26 24H2.00002C1.6464 24 1.30726 23.8595 1.05721 23.6095C0.807163 23.3594 0.666687 23.0203 0.666687 22.6667V1.33333C0.666687 0.979711 0.807163 0.640573 1.05721 0.390524C1.30726 0.140476 1.6464 0 2.00002 0V0ZM14.08 11.5773L5.53069 4.31733L3.80402 6.34933L14.0974 15.0893L24.2054 6.34267L22.4614 4.32533L14.0814 11.5773H14.08Z" fill="black"/>
                            </svg>
                        </EmailShareButton>
                        {/*<div className="fb-share-button" data-href={linkPage}*/}
                        {/*     data-layout="button" data-size="large">*/}
                        {/*    <a target="_blank"*/}
                        {/*       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"*/}
                        {/*       className="fb-xfbml-parse-ignore">*/}
                        {/*        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M14 0.666687C6.63602 0.666687 0.666687 6.67236 0.666687 14.0812C0.666687 20.7764 5.54269 26.3259 11.9174 27.3334V17.958H8.53069V14.0812H11.9174V11.126C11.9174 7.76429 13.9067 5.90773 16.9534 5.90773C18.412 5.90773 19.9374 6.16931 19.9374 6.16931V9.46928H18.2574C16.6 9.46928 16.084 10.5035 16.084 11.5646V14.0812H19.7814L19.1907 17.958H16.084V27.3334C22.4574 26.3273 27.3334 20.775 27.3334 14.0812C27.3334 6.67236 21.364 0.666687 14 0.666687Z" fill="black"/>*/}
                        {/*        </svg>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            {approach.contentBlock.map((content) => renderContent(content))}
            <MoreProjects articles={approaches} current={approach.id} link="/approach/"/>
        </Layout>
    );
};

// export async function getStaticPaths() {
//     const approaches = await fetchAPI("/approaches");
//     return {
//         paths: approaches.map((approach) => ({
//             params: {
//                 slug: approach.slug,
//             },
//         })),
//         fallback: false,
//     };
// }


export async function getServerSideProps({ params, locale }) {
    const [approach, approaches] = await Promise.all([
            fetchAPI(`/approaches?_locale=${locale}&slug=${params.slug}`),
            fetchAPI(`/approaches?_locale=${locale}`),
        ]
    );

    return {
        props: { approach: approach[0], approaches }
    };
}

export default Approach;
