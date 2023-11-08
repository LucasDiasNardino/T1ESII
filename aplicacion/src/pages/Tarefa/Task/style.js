import styled from "styled-components";

export const Header = styled.div`
    display: table-row;
    flex-direction: row;
    align-items: left;
    width: 100%;
    height: 30vh;
    box-shadow: 0 1px 2px #0003;
    background-color: #f0f0f0;
    border-radius: 5px;
`;

export const Title = styled.div`
    /* display: inline; */
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    display: inline-block;
    margin-top: 3vh;
    margin-left: 3vh;
`;

export const TasksInfo = styled.div`
    display: inline;
    justify-content: left;
    align-items: center;
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    padding-left: 32px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60vh;
    box-shadow: 0 1px 2px #0003;
    background-color: #f0f0f0;
    border-radius: 5px;
`;

export const FooterButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
`;

export const Button = {
    width: "20vw",
    height: "6vh",
    fontSize: "14px",
    textAlign: "center",
    justifyItems: "center",
    marginLeft: "3vh",
};

export const ButtonDelete = {
    backgroundColor: "#FF9292",
    color: "#8B0000",
};

export const ButtonEdit = {
    backgroundColor: "#3F3F3F",
    color: "#E0E0E0",
};
