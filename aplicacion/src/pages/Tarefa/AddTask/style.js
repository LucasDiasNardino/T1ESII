import styled from "styled-components";

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #3f3f3f;
    height: 0vh;
    align-self: center;
`;

export const completed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    gap: 5vh;
    width: 100%;
`;

export const completedText = styled.h3`
    font-size: 24px;
    font-weight: 400;
    color: #3f3f3f;
    height: 0vh;
    align-self: center;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2vh;
    padding-top: 8vh;
    gap: 6vh;
    margin-bottom: 32px;
`;

export const Input = {
    height: "8vh",
    borderRadius: "5px",
    borderStyle: "dashed",
    borderWidth: "5px",
    fontSize: "18px",
    padding: "1vh",
    width: "80vh",
};

export const FooterButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
`;

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

export const ButtonSave = {
    backgroundColor: "#EAD0FE",
    color: "#CD8DFF",
    borderStyle: "solid",
};

export const ButtonCancel = {
    backgroundColor: "#FF9292",
    color: "#8B0000",
    borderStyle: "solid",
};
