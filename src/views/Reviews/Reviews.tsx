import React from "react";
import './Reviews.css';
import ListReviews from "../../components/App/ListReviews";

const Reviews = () => {
    return (
        <main className="Main">
            <div className="MainInfo">
                <ListReviews/>
            </div>
        </main>
    )
}
export default Reviews;