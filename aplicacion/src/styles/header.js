import styled from "styled-components";

export const Icon = {
    fontSize: "34px",
    fontWeight: 400,
    cursor: "pointer",
    margin: 0,
    marginRight: "3vh",
    marginBottom: "-2vh",
};

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    max-width: 95vw;
`;

export const Label = styled.label`
    font-size: 24px;
    font-weight: 600;
    color: #323232;
    margin: 3vh;
    margin-bottom: 0;
`;

export const HorizontalLine = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: 0;
    padding: 0;
    margin-bottom: 3vh;
`;
