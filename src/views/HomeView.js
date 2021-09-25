import * as moviesAPI from "services/movies-api";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import MoviesList from "components/MoviesList";
import NotFoundView from "./NotFoundView";
import Loader from "components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function HomeView({ wrongUrl }) {
  const [popularFilms, setPopularFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const history = useHistory();
  let page = useRef(1);

  useEffect(() => {
    wrongUrl && history.push("/");
  }, []);

  useEffect(() => {
    setStatus("pending");

    moviesAPI
      .fetchPopularFilms(page.current)
      .then((res) => {
        setPopularFilms(res);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }, []);

  function fetchMoreData() {
    page.current += 1;

    moviesAPI
      .fetchPopularFilms(page.current)
      .then((res) => {
        setPopularFilms((prev) => [...prev, ...res]);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
  }

  return (
    <>
      {status === "pending" && <Loader />}

      {status === "resolved" && (
        <InfiniteScroll
          dataLength={popularFilms.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loader />}
        >
          <MoviesList list={popularFilms} />
        </InfiniteScroll>
      )}

      {status === "rejected" && <NotFoundView />}
    </>
  );
}
