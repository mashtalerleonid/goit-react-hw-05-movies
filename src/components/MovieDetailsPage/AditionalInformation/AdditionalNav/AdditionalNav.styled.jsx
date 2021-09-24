import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 15px auto;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  padding: 5px;
  background-color: #3f51b5;
  font-weight: bold;
  color: inherit;
  cursor: pointer;
  color: white;

  :hover {
    color: #75bdf8;
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;
