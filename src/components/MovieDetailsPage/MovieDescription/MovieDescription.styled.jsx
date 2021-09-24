import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  width: 90%;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #3f51b5;
  font-weight: bold;
  color: white;

  :hover {
    color: #75bdf8;
  }
`;

export const Img = styled.img`
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0;
`;
