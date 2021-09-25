import * as moviesAPI from "services/movies-api";
import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import MovieDescription from "components/MovieDetailsPage/MovieDescription";
import AdditionalNav from "components/MovieDetailsPage/AditionalInformation/AdditionalNav";
import Loader from "components/Loader";
import NotFoundView from "./NotFoundView";

const CastSubView = lazy(() => import("./CastSubView"));
const ReviewsSubView = lazy(() => import("./ReviewsSubView"));

export default function MovieDetailsView() {
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState("idle");
  const { path, params } = useRouteMatch();
  const { movieId } = params;

  useEffect(() => {
    setStatus("pending");
    moviesAPI
      .fetchFilmInfo(movieId)
      .then((res) => {
        setFilm(res);
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

      {status === "resolved" && (
        <>
          <MovieDescription film={film} />
          <AdditionalNav />
        </>
      )}

      {status === "rejected" && (
        <NotFoundView text={"No details about this film"} />
      )}

      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={`${path}/cast`} exact>
              <CastSubView></CastSubView>
            </Route>
            <Route path={`${path}/reviews`}>
              <ReviewsSubView></ReviewsSubView>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
