import React from 'react'
import './restaurant.css'
import data from "../data/data.json";

export const Restaurant = (props) => {
    console.log(data)
    return (
        <div className="container divider">
            <div className="cards">
                {data.map((data) => (
                    <div className="card">
                    <img width="254" height="160px" src={data.img} />
                    <div className="restaurant-details">
                            <div className="restaurant-title">{data.Name}</div>
                            <div className="restaurant-subtitle">{data.Categories.join(", ")}</div>
                    </div>
                    <div className="restaurant-info">
                        <div className="restaurant-ratings">
                                <i className="material-icons star-icon">{data.rating}</i> 4.3
                        </div>
                        .<div className="restaurant-delivery-timings"> 33 MINS</div> .
                        <div className="restaurant-cost-for-two">₹200 FOR TWO</div>
                    </div>
                    <div className="offer-banner">
                        <span className="material-icons"> local_offer </span>
                        <span className="offer-text">20% off | Use TRYNEW</span>
                    </div>
                </div>
                ))}
              
            </div>
        </div>

    );
}
