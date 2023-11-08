import styled from "styled-components";

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow-y: auto;
`;
