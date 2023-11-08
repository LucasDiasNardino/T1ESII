import React from "react";
import * as S from "./style";

const ActivityList = ({ items }) => {
    return (
        <S.List>
            {items.map((item) => (
                <li key={item.props.id} style={{ listStyle: "none" }}>
                    {item}
                </li>
            ))}
        </S.List>
    );
};

export default ActivityList;
