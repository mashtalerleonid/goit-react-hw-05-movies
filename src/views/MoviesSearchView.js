import * as moviesAPI from "services/movies-api";
import { useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import Loader from "components/Loader";
import NotFoundView from "./NotFoundView";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MoviesSearchView(params) {
  const [searchFilms, setSearchFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const history = useHistory();
  const location = useLocation();
  let page = useRef(1);

  const queryParam = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    setStatus("pending");

    moviesAPI
      .fetchQueryFilms(queryParam, page.current)
      .then((res) => {
        setSearchFilms(res);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }, [location.search]);

  function fetchMoreData() {
    page.current += 1;

    moviesAPI
      .fetchQueryFilms(queryParam, page.current)
      .then((res) => {
        setSearchFilms((prev) => [...prev, ...res]);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }

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
          <InfiniteScroll
            dataLength={searchFilms.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Loader />}
          >
            <MoviesList list={searchFilms} search={location.search} />
          </InfiniteScroll>
        ))}

      {status === "rejected" && <NotFoundView />}
    </div>
  );
}
