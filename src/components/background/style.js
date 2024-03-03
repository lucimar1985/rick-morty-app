import styled from "styled-components";

import BackgroundImage from "../../assets/bg-img.svg";

export const Container = styled.div`
  width: 100%;
  height: 480px;
  padding: 0px 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  background-color:  #d3d3d3;

  h1 {
    font-weight: 900;
    font-size: 100px;
    line-height: 110px;
    color: #202329;

    @media (max-width: 520px){
      font-size: 60px;
      text-align: center;
    }
  }
`;
