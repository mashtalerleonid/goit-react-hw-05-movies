import * as moviesAPI from "services/movies-api";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";

export default function MoviesSearchView(params) {
  const history = useHistory();
  const location = useLocation();
  const [searchFilms, setSearchFilms] = useState([]);

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const queryParam = new URLSearchParams(location.search).get("query");

    moviesAPI.fetchQueryFilms(queryParam).then(setSearchFilms);
  }, [location.search]);

  return (
    <div>
      <SearchForm
        submit={(query) => {
          history.push({ ...location, search: `query=${query}` });
        }}
      />

      {searchFilms && (
        <MoviesList list={searchFilms} search={location.search} />
      )}
    </div>
  );
}
