import React, {Component} from 'react';
import ReviewService from "../../services/ReviewService";
import './List.css';

interface IState{
    reviews: any[]
}

class ListReviews extends Component<any, IState> {

    constructor(props:any) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        ReviewService.getReviews()
            .then((res) => {
                const reviews = res.data;
                this.setState({reviews})
            });
    }

    render() {
        return (
            <div>
                {this.state.reviews.map(
                    review =>
                        <div className="ContentBlock">
                            <figure className="text-end">
                                <blockquote>
                                    {review.description}
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    {review.name}, {review.address}
                                </figcaption>
                            </figure>
                        </div>
                )}
            </div>
        );
    }
}

export default ListReviews;