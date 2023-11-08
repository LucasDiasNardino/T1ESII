import { Card } from "antd";
import React, { Fragment, useState } from "react";
import * as S from "./style";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import history from "../../history";

const ActivityButton = ({ title, totalTasks, isDone, id, intialDate }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleActivityClick = () => {
        history.push("/atividade/" + id);
    };

    console.log(isDone);

    return (
        <Card
            style={{
                width: "35vh",
                height: "20vh",
                borderRadius: "5px",
                border: "none",
                backgroundColor: !isHovered ? "#d9d9d9" : "#EAD0FE",
                color: "#000",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.2s",
                position: "relative",
                borderBlockStyle: "none",
                borderBottom: "8px solid #CD8DFF",
            }}
            onClick={handleActivityClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            title={
                <S.Title>
                    {[
                        <Fragment key='title'>{title} </Fragment>,
                        isDone ? (
                            <CheckCircleOutlined key='doneIcon' />
                        ) : (
                            <MinusCircleOutlined key='notDoneIcon' />
                        ),
                    ]}
                </S.Title>
            }
            headStyle={{
                borderBottom: "1px dashed #CD8DFF",
                fontSize: "20px",
            }}
            bodyStyle={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <S.TasksInfo>
                {[
                    <Fragment key='total'>{totalTasks + " tasks"}</Fragment>,
                    <br key='break' />,
                    <Fragment key='initialDate'>
                        {"Data de Inicio: " + intialDate}
                    </Fragment>,
                ]}
            </S.TasksInfo>
        </Card>
    );
};

export default ActivityButton;
