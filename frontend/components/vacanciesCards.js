import React from "react";
import MarkdownView from 'react-showdown';
import { DateTime } from "luxon";

const VacanciesCard = ({ card, showModal }) => {

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
                            // onClick={()=>{showModal}}
                    >apply</button>
                </div>
            </div>
    );
};

export default VacanciesCard;