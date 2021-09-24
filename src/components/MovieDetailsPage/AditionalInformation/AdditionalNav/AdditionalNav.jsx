import { useLocation, useRouteMatch } from "react-router-dom";
import { List, StyledLink } from "./AdditionalNav.styled";

export default function AdditionalNav() {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <List>
      <StyledLink to={{ ...location, pathname: `${url}/cast` }}>
        Cast
      </StyledLink>
      <StyledLink to={{ ...location, pathname: `${url}/reviews` }}>
        Reviews
      </StyledLink>
    </List>
  );
}
