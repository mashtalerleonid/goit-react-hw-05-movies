import * as moviesAPI from "services/movies-api";
import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList";

export default function HomeView() {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    moviesAPI.fetchPopularFilms().then(setPopularFilms);
  }, []);

  return <MoviesList list={popularFilms} />;
}
