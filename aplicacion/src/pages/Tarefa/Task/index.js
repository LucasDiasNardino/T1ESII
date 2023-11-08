import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as H from "../../../styles/header";
import * as S from "./style";
import { DeleteOutlined, RollbackOutlined } from "@ant-design/icons";
import Content from "../../../components/Content";
import history from "../../../history";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import { Button } from "antd";

const Task = () => {
    const { id } = useParams();
    // const { loading } = useAuth();
    const [task, setTask] = useState({});
    // const [assunto, setAssunto] = useState("");
    // const [descricao, setDescricao] = useState("");
    // const [prioridade, setPrioridade] = useState("");
    // const [duracaoEstimada, setDuracaoEstimada] = useState("");
    // const [dataInicio, setDataInicio] = useState("");
    // const [dataConclusao, setDataConclusao] = useState("");
    // const [trabalhoReal, setTrabalhoReal] = useState("");

    useEffect(() => {
        // if (loading) return <></>;
        // const token = localStorage.getItem("@user:token");

        // if (!token) {
        //     history.push("/");
        // }

        api.get("/tarefa/procurar/" + id)
            .then((res) => {
                // console.log(res.data);
                setTask(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [task, id]);

    function handleDelete() {
        api.delete("/tarefa/remover/" + id)
            .then((res) => {
                console.log(res.data);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleEdit() {
        history.push("/tarefa/atualizar/" + id);
    }

    return (
        <>
            <Content>
                <H.Header>
                    <H.Label>{"Task " + id}</H.Label>
                    <RollbackOutlined
                        style={{ ...H.Icon }}
                        onClick={() => history.goBack()}
                    />
                </H.Header>

                <H.HorizontalLine />

                <S.Header>
                    <S.Title>{"Assunto: " + task.assunto}</S.Title>
                    <br />
                    <br />
                    <S.TasksInfo>
                        {"Horas Estimadas de Trabalho: " +
                            task.duracaoEstimada +
                            "h"}
                    </S.TasksInfo>
                    <br />
                    <S.TasksInfo>
                        {"Data de Inicio: " + task.dataInicio}
                    </S.TasksInfo>
                    <br />
                    <S.TasksInfo>
                        {"Prioridade: " + task.prioridade}
                    </S.TasksInfo>
                </S.Header>

                <S.Body>
                    <br />
                    <br />
                    <S.TasksInfo>{"Descrição: " + task.descricao}</S.TasksInfo>
                    <br />
                    <S.TasksInfo>
                        {"Data de Conclusao: " + task.dataConclusao}
                    </S.TasksInfo>
                    <br />
                    <S.TasksInfo>
                        {"Horas Reais de Trabalho: " +
                            (task.trabalhoReal + "h")}
                    </S.TasksInfo>
                    <br />
                    <br />
                    <S.FooterButtons>
                        <Button
                            style={{ ...S.Button, ...S.ButtonEdit }}
                            onClick={handleEdit}
                        >
                            Editar Task
                        </Button>
                        <Button
                            style={{ ...S.Button, ...S.ButtonDelete }}
                            onClick={handleDelete}
                        >
                            Apagar Task
                        </Button>
                    </S.FooterButtons>
                </S.Body>
            </Content>
        </>
    );
};

export default Task;
