import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  width: 280px;
  margin: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  transition: all 250ms ease;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.7);
  }
`;

export const Thumb = styled.div`
  width: 280px;
  height: 400px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
`;

export const Name = styled.h2`
  max-width: 70%;
  font-size: 12px;
  text-transform: uppercase;
  color: black;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  color: #3f51b5;
`;

export const Year = styled.p`
  margin-right: 10px;
`;
export const Rating = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 16px;
  border-radius: 5px;
  color: white;
  background-color: #3f51b5;
`;
