import React, { useEffect, useState } from "react";
import Content from "../../../components/Content";
import * as H from "../../../styles/header";
import { RollbackOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import AddTaskButton from "../../../components/AddTaskButton";
import TaskList from "../../../components/TaskList";
import TaskCard from "../../../components/TaskCard";
import history from "../../../history";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import * as S from "./style";
import { Button } from "antd";

const Activity = () => {
    const { id } = useParams();
    // const { loading } = useAuth();
    const [activity, setActivity] = useState({});

    useEffect(() => {
        // if (loading) return <></>;
        // const token = localStorage.getItem("@user:token");

        // if (!token) {
        //     history.push("/");
        // }

        console.log(id);

        api.get("/atividade/procurar/" + id)
            .then((res) => {
                setActivity(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [activity, id]);

    const title = activity ? activity.titulo : "Atividade";

    const tarefas = activity
        ? activity?.tarefas?.map((task) =>
              task.id == null ? (
                  <></>
              ) : (
                  <TaskCard
                      id={task.id}
                      title={task.nome}
                      isDone={task.concluida}
                  />
              )
          )
        : [];

    function handleEdit() {
        history.push("/atividade/atualizar/" + id);
    }

    return (
        <Content>
            <H.Header>
                <H.Label>{title}</H.Label>
                <RollbackOutlined
                    style={{ ...H.Icon }}
                    onClick={() => history.push("/home")}
                />
            </H.Header>

            <H.HorizontalLine />

            <S.Buttons>
                <AddTaskButton idAtividade={id} />
                <Button
                    style={{ ...S.Button, ...S.ButtonEdit }}
                    onClick={handleEdit}
                >
                    Editar Atividade
                </Button>
            </S.Buttons>
            <TaskList items={tarefas} />
        </Content>
    );
};

export default Activity;
