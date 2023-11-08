import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    width: 100%;
`;

export const Button = {
    width: "35vh",
    height: "8vh",
    borderRadius: "5px",
    border: "none",
    fontSize: "18px",
    marginLeft: "3vh",
};

export const ButtonEdit = {
    backgroundColor: "#3F3F3F",
    color: "#E0E0E0",
    borderStyle: "solid",
};
