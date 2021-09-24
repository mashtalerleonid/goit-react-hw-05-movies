import { useLocation, useHistory } from "react-router-dom";
import {
  checkDate,
  checkPoster,
  checkTitle,
} from "../../MoviesList/MoviesList";
import {
  Container,
  Button,
  Img,
  Title,
  SubTitle,
} from "./MovieDescription.styled";

export default function MovieDescription({ film }) {
  const location = useLocation();
  const history = useHistory();

  function handleGoBack() {
    history.push(
      location.state ? `${location.state.from}${location.state.search}` : "/"
    );
  }

  return (
    <>
      <Button onClick={handleGoBack} type="button">
        Go back
      </Button>

      <Container>
        <Img
          src={checkPoster(film.poster_path)}
          alt={checkTitle(film)}
          width="200px"
        />
        <div>
          <Title>{`${checkTitle(film)} (${checkDate(film)})`}</Title>
          <p>{`Raiting: ${film.vote_average}`}</p>
          <SubTitle>Overview</SubTitle>
          <p> {film.overview}</p>
          <SubTitle>Genres</SubTitle>
          {film.genres.map((genre) => (
            <span key={genre.id}>{`${genre.name} `}</span>
          ))}
        </div>
      </Container>
    </>
  );
}
