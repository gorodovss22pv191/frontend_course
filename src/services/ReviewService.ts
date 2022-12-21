import axios from "axios";

const REVIEW_API_BASE_URL = "http://localhost:8080/reviews";

class ReviewService {
    getReviews() {
        return axios.get(REVIEW_API_BASE_URL);
    }
}

export default new ReviewService();