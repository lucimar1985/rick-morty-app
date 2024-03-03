import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 580px;
    height: 240px;
    background-color: #3c3e44;
    box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1),
    0px 2px 4px -1px rgba(0,0,0,0.06);
    border-radius: 0px 9px 9px 0px;

    @media (max-width: 520px){
            width: 220px;
            flex-direction: column;
            height: 520px;
        }

    img{
        width: 230px;
        border-radius: 9px 0px 0px 9px;
        @media (max-width: 520px){
            width: 100%;
            border-radius: 9px 9px 0px 0px;
        }
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 12px;
    transition: 0.3s ease-in-out;
    

    .title{
        font-weight: 800;
        font-size: 27px;
        line-height: 30px;
        color: #f5f5f5;
        &:hover{
            color: #ff9800;
        }
        &:active{
            color: red;
        }
    }
    .status{
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: #ffffff;
        text-transform: capitalize;

        span{
            display: block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin-right: 6px;
            background-color: ${(props) => props.backgroundColor};
        }

    }
    .info{
        font-weight: 500;
        font-size: 15px;
        line-height: 26px;
        color: #9e9e9e;

    }
    .description{
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #f5f5f5;
        &:hover{
            color: #ff9800;
        }
        &:active{
            color: red;
        }
    }
`;