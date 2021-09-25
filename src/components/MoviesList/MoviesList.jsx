import { Link, useRouteMatch, useHistory } from "react-router-dom";

import noPosterImg from "images/no-poster.jpg";
import {
  List,
  Item,
  Thumb,
  Img,
  Content,
  Name,
  Description,
  Year,
  Rating,
} from "./MoviesList.styled";

// Перевіряєм коректність даних, що прийшли з бекенду
//Перевіряє постер
export function checkPoster(poster) {
  return poster ? `https://image.tmdb.org/t/p/w500${poster}` : noPosterImg;
}

//Перевіряє заголовок
export function checkTitle(film) {
  return film.title ?? film.name;
}

//Перевіряє дату
export function checkDate(film) {
  return film.release_date
    ? film.release_date.split("-")[0]
    : new Date().getFullYear();
}

export default function MoviesList({ list, search = "" }) {
  const { url } = useRouteMatch();

  return (
    <List>
      {list.map((film) => (
        <Item key={film.id}>
          <Link
            to={{
              state: { from: url, search },
              pathname: `movies/${film.id}`,
            }}
          >
            <Thumb>
              <Img
                src={checkPoster(film.poster_path)}
                alt="{checkTitle(film)}"
              />
            </Thumb>
            <Content>
              <Name>{checkTitle(film)}</Name>
              <Description>
                <Year>{checkDate(film)}</Year>
                <Rating>{film.vote_average}</Rating>
              </Description>
            </Content>
          </Link>
        </Item>
      ))}
    </List>
  );
}
