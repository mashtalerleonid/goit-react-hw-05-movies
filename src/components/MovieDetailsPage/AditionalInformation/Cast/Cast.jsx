import { checkPoster } from "components/MoviesList/MoviesList";
import { List, Item } from "./Cast.styled";

export default function Cast({ castList }) {
  return (
    <>
      <List>
        {castList.map((actor) => (
          <Item key={actor.id}>
            <img
              src={checkPoster(actor.profile_path)}
              alt={actor.name}
              width="150px"
            />
            <h2>{actor.name}</h2>
            <p>{actor.character}</p>
          </Item>
        ))}
      </List>
    </>
  );
}
