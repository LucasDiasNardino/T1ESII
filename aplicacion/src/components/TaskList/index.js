import React from "react";
import * as S from "./style";

const TaskList = ({ items }) => {
    return (
        <S.List>
            {items ? (
                items.map((item) => <div key={item.props.id}>{item}</div>)
            ) : (
                <></>
            )}
        </S.List>
    );
};

export default TaskList;
