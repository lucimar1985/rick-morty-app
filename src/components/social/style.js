import styled from "styled-components";
export const Container = styled.footer`
background-color: #202329;
padding: 20px 0px 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 16px;

div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #f5f5f5;
}
img{
    width: 26px;
    &:hover{
        opacity: 0.7;
    }
}

`;