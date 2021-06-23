import React from "react";
import MarkdownView from 'react-showdown';
import { DateTime } from "luxon";
import {useRouter} from "next/router";
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";

const VacanciesCard = ({ card, showModal }) => {

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
            t =  en;
    };

    const dateFormating = DateTime.fromISO(card.date).toLocaleString(DateTime.DATE_MED)

    return (
            <div className="cardVacancies">
                <div className="top">
                    <h2>{card.position}</h2>
                    <div className="desc">
                        {card.location ?
                            <p className="location">{card.location}</p>
                            : null
                        }
                        <p className="date">{dateFormating}</p>
                    </div>
                </div>
                <div className="cardBody">
                    <div className="text">
                        <MarkdownView
                            markdown={card.text}/>
                    </div>
                    <button className="apply"
                            onClick={showModal}
                    >{t.apply}</button>
                </div>
            </div>
    );
};

export default VacanciesCard;