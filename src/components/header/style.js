import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 20px 50px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    nav {
        display: flex;
        align-items: center;
        gap: 34px;
        a {
            font-weight: 700;
            font-size: 18px;
            line-height: 29px;
            color: #333333;
            text-decoration: none;
            transition: 0.3s ease-in-out;

            &:hover {
                color: #ff9800;
            }
            &:active {
                color: red;
            }
        }
        .link-btn {
            padding: 8px 22px;
            border: 1px solid #ff9800;
            border-radius: 9px;
            transition: 0.3s ease-in-out;
            &:hover{
                color: #ffffff;
                background-color: #ff9800;
            }
            &:active {
                color: red;
            }
        }
        @media (max-width: 520px){
            display: none;
        }
    }

`;