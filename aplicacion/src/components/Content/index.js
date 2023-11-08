import React from "react";
import * as S from "./style";

const Content = ({ children, icon }) => {
    return (
        <>
            <S.Container>
                <S.Content>{children}</S.Content>
            </S.Container>
        </>
    );
};

export default Content;
