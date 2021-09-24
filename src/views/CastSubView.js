import { useEffect, useState } from "react";
import * as moviesAPI from "services/movies-api";
import { useParams } from "react-router-dom";
import Cast from "components/MovieDetailsPage/AditionalInformation/Cast";

export default function CastSubView() {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.fetchFilmCast(movieId).then(setCastList);
  }, [movieId]);

  return <>{castList && <Cast castList={castList} />}</>;
}
