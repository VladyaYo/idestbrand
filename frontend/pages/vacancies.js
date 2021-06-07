import React from "react";
import classnames from "classnames"
import Layout from "../components/layout";
import Seo from "../components/seo";
import {fetchAPI} from "../lib/api";
import VacanciesCard from "../components/vacanciesCards";


const Vacancies = ({ vacancies, categories, homepage,  }) => {

    return (
        <Layout pageClass="vacancies">
            <Seo seo={homepage.seo} />
            <section className="head">
                <div className="container">
                    <div className="text">
                        <h1>{vacancies.main.heading}</h1>
                        <p>{vacancies.main.about}</p>
                    </div>
                </div>
            </section>
            <section className="vacanciesCards">
                <div className="container">
                    { vacancies.CardVacancies ?
                        vacancies.CardVacancies.map((card) => {
                            return(
                                <VacanciesCard key={card.id} card={card}/>
                                // console.log(card)
                            )})
                        : null}
                </div>
            </section>
        </Layout>
    );
}
export async function getStaticProps() {
    // Run API calls in parallel
    const [vacancies, homepage] = await Promise.all([
        fetchAPI("/vacancies"),
        fetchAPI("/homepage"),
    ]);

    return {
        props: { vacancies, homepage },
        revalidate: 1,
    };
}
export default Vacancies;
