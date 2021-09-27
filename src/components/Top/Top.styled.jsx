import styled from "@emotion/styled";

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3f51b5;
  background-color: transparent;
  border: 2px solid #3f51b5;
  opacity: 0.5;
  transition: all 250ms ease-in-out;

  right: ${(props) => (props.isShown ? "30px" : "-100px")};

  :hover {
    opacity: 1;
    background-color: #3f51b5;
    color: white;
  }

  svg {
    color: currentColor;
  }
`;
