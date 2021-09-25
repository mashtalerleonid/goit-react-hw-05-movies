import { useEffect, useState } from "react";
import * as moviesAPI from "services/movies-api";
import { useParams } from "react-router-dom";
import Cast from "components/MovieDetailsPage/AditionalInformation/Cast";
import NotFoundView from "./NotFoundView";
import Loader from "components/Loader";

export default function CastSubView() {
  const [castList, setCastList] = useState(null);
  const [status, setStatus] = useState("idle");
  const { movieId } = useParams();

  useEffect(() => {
    setStatus("pending");

    moviesAPI
      .fetchFilmCast(movieId)
      .then((res) => {
        setCastList(res);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }, [movieId]);

  return (
    <>
      {status === "pending" && <Loader />}

      {status === "resolved" && <Cast castList={castList} />}

      {status === "rejected" && (
        <NotFoundView text={"No information about actors"} />
      )}
    </>
  );
}
