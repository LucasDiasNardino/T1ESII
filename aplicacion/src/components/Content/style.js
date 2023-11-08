import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    height: 90vh;
    gap: 15px;
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #fff;
    max-width: 95vw;
    padding: 20px;
    border-radius: 5px;
`;
