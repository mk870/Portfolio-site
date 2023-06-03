import styled from "styled-components";

export const poster = styled.img`
  height: 400px;
  width: 500px;
  border-radius: 10px;
  border: 2px solid aliceblue;
  @media (max-width: 1160px) {
    height: 480px;
    width: 450px;
  }
  @media (max-width: 800px) {
    height: 400px;
    width: 380px;
  }
  @media (max-width: 400px) {
    height: 350px;
    width: 280px;
  }
`;
