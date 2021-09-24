import * as moviesAPI from "services/movies-api";
import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import MovieDescription from "components/MovieDetailsPage/MovieDescription";
import AdditionalNav from "components/MovieDetailsPage/AditionalInformation/AdditionalNav";
import Loader from "components/Loader";

const CastSubView = lazy(() => import("./CastSubView"));
const ReviewsSubView = lazy(() => import("./ReviewsSubView"));

export default function MovieDetailsView() {
  const [film, setFilm] = useState(null);
  const { path, params } = useRouteMatch();
  const { movieId } = params;

  useEffect(() => {
    moviesAPI
      .fetchFilmInfo(movieId)
      .then(setFilm)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      {film && (
        <div>
          <MovieDescription film={film} />

          <AdditionalNav />

          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path={`${path}/cast`}>
                <CastSubView></CastSubView>
              </Route>
              <Route path={`${path}/reviews`}>
                <ReviewsSubView></ReviewsSubView>
              </Route>
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
}
