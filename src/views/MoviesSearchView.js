import * as moviesAPI from "services/movies-api";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import Loader from "components/Loader";
import NotFoundView from "./NotFoundView";

export default function MoviesSearchView(params) {
  const [searchFilms, setSearchFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    setStatus("pending");

    const queryParam = new URLSearchParams(location.search).get("query");

    moviesAPI
      .fetchQueryFilms(queryParam)
      .then((res) => {
        setSearchFilms(res);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }, [location.search]);

  return (
    <div>
      <SearchForm
        submit={(query) => {
          history.push({ ...location, search: `query=${query}` });
        }}
      />

      {status === "pending" && <Loader />}

      {status === "resolved" &&
        (searchFilms.length === 0 ? (
          <NotFoundView text={"No movie on your request"} />
        ) : (
          <MoviesList list={searchFilms} search={location.search} />
        ))}

      {status === "rejected" && <NotFoundView />}
    </div>
  );
}
