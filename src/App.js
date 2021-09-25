import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Loader from "components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <HomeView wrongUrl={false} />
          </Route>
          <Route path="/movies" exact>
            <MoviesSearchView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Route>
            <HomeView wrongUrl={true} />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  );
}
