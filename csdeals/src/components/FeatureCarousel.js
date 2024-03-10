import React from "react";

import '../styles/featurecarousel.css';
import data from '../datas/testitems.json';
import { convertToPrice, floatToPercentage } from "./helper";

import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function FeatureCarousel(props) {
    const maxNameLength = 15;

    // doing data[props.type] throws errors so use switch to return it in string form
    const jsonType = () => {
        switch (props.type) {
            case 'suggested':
                return 'suggested';
            case 'best':
                return 'best';
            default:
                return null;
        }
    };

    const ratingColor = (rating) => {
        const hue = (rating < 3) ? 0 : ((rating-3)/2) * 120; // Anything below 3 is red else normalize vals between 3-5 and map to hsl spec
        return `hsl(${hue}, 100%, 50%)`;
    };

    const moveCarousel = (direction) => {
        const carouselItems = document.getElementById(props.type).querySelector(".fc-items");
        if (carouselItems) {
            const currentTransform = window.getComputedStyle(carouselItems).getPropertyValue('transform');
            const currentTranslateX = new DOMMatrix(currentTransform).m41;
            const newTranslateX = direction === 'next'
            ? currentTranslateX - 1212.54
            : currentTranslateX + 1212.54
            
            carouselItems.style.transform = `translateX(${newTranslateX}px)`;
        }
    }



    return (
        <div className="fc-root" id={props.type}>
            <h2>
                {props.title}
            </h2>
            <div className="fc-carousel-wrapper">
                <MdOutlineKeyboardArrowRight className="carousel-btn next-btn" onClick={() => moveCarousel('next')} />
                <div className="fc-items-wrapper">
                    <div className="fc-items" style={{transform:"translateX(0px)"}}>
                        {
                            data[jsonType()].map((datas, index) => {
                                return (
                                    <div id={`c-${index}`} className="card">
                                        <div className="content">
                                            <div className="item-image">

                                            </div>
                                            <div className="item-prices">
                                                <p className="actualprice">${convertToPrice(datas.weapon.price)}</p>
                                                <p className="suggested">Steam suggested: ${convertToPrice(datas.weapon.suggested)}</p>
                                            </div>
                                            <div className="item-titles">
                                                <p className="wtype">{datas.weapon.type}</p>
                                                <p className="wname">{datas.weapon.name}</p>
                                            </div>
                                            <div className="item-wear">
                                                <p className="wwear">{datas.weapon.exterior} | {datas.weapon.pattern}</p>
                                                <div className="wearinfo-wrapper">
                                                    <div className="wear-bar-bg">
                                                        <div className="wear-bar">
                                                            <span className="best"></span>
                                                            <span className="good"></span>
                                                            <span className="ok"></span>
                                                            <span className="bad"></span>
                                                            <span className="worst"></span>
                                                        </div>
                                                        <div className="wear-ping" style={{left:floatToPercentage(datas.weapon.float)}}>
                                                            <TiArrowSortedUp className="float-arrow" />
                                                        </div>
                                                    </div>
                                                    <p>{datas.weapon.float}</p>
                                                </div>
                                            </div>
                                            <div className="item-seller">
                                                <div className="wrapper">
                                                    <div className="seller-image">
                                                        
                                                    </div>
                                                    <p className="seller-name">
                                                        {
                                                        (datas.seller.name).length > maxNameLength 
                                                        ? 
                                                        (datas.seller.name).substring(0, maxNameLength) + '...' 
                                                        : 
                                                        datas.seller.name
                                                        }
                                                    </p>
                                                </div>
                                                <p className="seller-rating" style={{color:ratingColor(datas.seller.rating)}}>{datas.seller.rating}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <MdOutlineKeyboardArrowLeft className="carousel-btn back-btn" onClick={() => moveCarousel('back')} />
            </div>
        </div>
    );
}

export default FeatureCarousel;