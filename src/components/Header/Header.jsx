import { StyledLink, Nav } from "./Header.styled";

export default function Header() {
  return (
    <Nav>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Nav>
  );
}
