import React, { useState } from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import * as S from "./style";
import history from "../../history";

const AddTaskButton = ({ idAtividade }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <S.Container>
            <Button
                style={{
                    width: "35vh",
                    height: "8vh",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: !isHovered ? "#d9d9d9" : "#EAD0FE",
                    color: "#323232",
                    fontSize: "24px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "0.2s",
                    position: "relative",
                    borderStyle: "dashed",
                    borderWidth: "5px",
                    borderColor: !isHovered ? "#c6c6c6" : "#CD8DFF",
                }}
                icon={
                    <PlusCircleFilled
                        style={{ color: !isHovered ? "#A8A8A8" : "#CD8DFF" }}
                    />
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => history.push(`/tarefa/cadastrar/${idAtividade}`)}
            >
                Add
            </Button>
        </S.Container>
    );
};

export default AddTaskButton;
