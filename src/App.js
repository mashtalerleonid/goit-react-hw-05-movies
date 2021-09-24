import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Loader from "components/Loader";

const HomeView = lazy(() => import("views/HomeView"));
const MovieDetailsView = lazy(() => import("views/MovieDetailsView"));
const MoviesSearchView = lazy(() => import("views/MoviesSearchView"));

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesSearchView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
