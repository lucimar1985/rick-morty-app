import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 12px;
    transition: 0.3s ease-in-out;

    button{
        background-color: transparent;
        border: none;
        color: rgba(158,158,158,0.7);
        font-size: 50px;
        &:hover{
            color: #ff9800;
            cursor: pointer;
        }
        &:disabled{
            color: rgba(158,158,158,0.5);
            cursor: not-allowed;
        }

    }
    .container-page{
        display: flex;
        align-items: center;
        gap: 12px;

    }
    .page{
        font-weight: 400;
        font-size: 16px;
        line-height: 15px;
        color: rgba(158,158,158,0.7);
    }
    .current-page{
        font-weight: 400;
        font-size: 26px;
        line-height: 27px;
        color: #ffffff;
    }

`;