import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    height: 60vh;
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #fff;
    max-width: 400px;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 24px;
    font-weight: 600;
    color: #323232;
    margin-bottom: 5vh;
`;

export const SignUpLabel = styled.label`
    margin-top: 5vh;
    font-size: 16px;
    color: #323232;
`;

export const ErrorLabel = styled.label`
    font-size: 14px;
    color: #f00;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #000;
    }
`;
