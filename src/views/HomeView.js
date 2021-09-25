import * as moviesAPI from "services/movies-api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MoviesList from "components/MoviesList";
import NotFoundView from "./NotFoundView";
import Loader from "components/Loader";

export default function HomeView({ wrongUrl }) {
  const [popularFilms, setPopularFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const history = useHistory();

  useEffect(() => {
    wrongUrl && history.push("/");
  }, []);

  useEffect(() => {
    setStatus("pending");
    moviesAPI
      .fetchPopularFilms()
      .then((res) => {
        setPopularFilms(res);
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

      {status === "resolved" && <MoviesList list={popularFilms} />}

      {status === "rejected" && <NotFoundView />}
    </>
  );
}
