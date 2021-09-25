import { useEffect, useState } from "react";
import * as moviesAPI from "services/movies-api";
import { useParams } from "react-router-dom";
import Reviews from "components/MovieDetailsPage/AditionalInformation/Reviews";
import NotFoundView from "./NotFoundView";
import Loader from "components/Loader";

export default function ReviewsSubView() {
  const [reviewsList, setReviewsList] = useState(null);
  const [status, setStatus] = useState("idle");
  const { movieId } = useParams();

  useEffect(() => {
    setStatus("pending");

    moviesAPI
      .fetchFilmReviews(movieId)
      .then((res) => {
        setReviewsList(res);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }, []);

  return (
    <>
      {status === "pending" && <Loader />}

      {status === "resolved" && <Reviews reviewsList={reviewsList} />}

      {status === "rejected" && <NotFoundView text={"No reviews"} />}
    </>
  );
}
