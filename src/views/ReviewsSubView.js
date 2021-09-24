import { useEffect, useState } from "react";
import * as moviesAPI from "services/movies-api";
import { useParams } from "react-router-dom";
import Reviews from "components/MovieDetailsPage/AditionalInformation/Reviews";

export default function ReviewsSubView() {
  const [reviewsList, setReviewsList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.fetchFilmReviews(movieId).then(setReviewsList);
  }, []);

  return <Reviews reviewsList={reviewsList} />;
}
