import React from "react";
import MarkdownView from 'react-showdown';
import { DateTime } from "luxon";

const { DateTime } = require("luxon");
const VacanciesCard = ({ card }) => {

    return (
            <div className="cardVacancies">
                <div className="top">
                    <h2>{card.position}</h2>
                    <div className="desc">
                        {card.location ?
                            <p className="location">{card.location}</p>
                            : null
                        }

                        <p className="date">{card.date}</p>
                    </div>
                </div>
                <div className="cardBody">
                    <div className="text">
                        <MarkdownView
                            markdown={card.text}/>
                    </div>
                    <button className="apply">apply</button>
                </div>
            </div>
    );
};

export default VacanciesCard;