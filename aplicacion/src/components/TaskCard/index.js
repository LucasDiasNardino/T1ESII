import { Button } from "antd";
import React, { useState } from "react";
import history from "../../history";

const TaskCard = ({ id }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleTaskClick = () => {
        history.push("/tarefa/" + id);
    };
    return (
        <>
            <Button
                style={{
                    height: "8vh",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: !isHovered ? "#d9d9d9" : "#EAD0FE",
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "0.2s",
                    position: "relative",
                    borderBottom: "4px solid #CD8DFF",
                    width: "100%",
                    marginBottom: "2vh",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleTaskClick}
            >
                {"Task " + id}
            </Button>
        </>
    );
};

export default TaskCard;
