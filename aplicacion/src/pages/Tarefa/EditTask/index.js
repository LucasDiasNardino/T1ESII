import React, { useEffect, useState } from "react";
import Content from "../../../components/Content";
import * as H from "../../../styles/header";
import { RollbackOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import history from "../../../history";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import { Button, Input } from "antd";
import * as S from "./style";

const EditTask = () => {
    const { id } = useParams();
    const { loading } = useAuth();
    const [tarefa, setTarefa] = useState({});
    const [trabalhoReal, setTrabalhoReal] = useState("");

    useEffect(() => {
        // if (loading) return <></>;
        // const token = localStorage.getItem("@user:token");

        // if (!token) {
        //     history.push("/");
        // }

        api.get("/tarefa/procurar/" + id)
            .then((res) => {
                setTarefa(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [tarefa, id]);

    function handleSave() {
        const data = new Date().toISOString().split("T")[0];
        const year = data.split("-")[0];
        const month = data.split("-")[1];
        const day = data.split("-")[2];

        const dataInicio = day + "/" + month + "/" + year;
        api.put("/tarefa/atualizar/" + id, {
            id: tarefa.id,
            idAtividade: tarefa.idAtividade,
            assunto: tarefa.assunto,
            descricao: tarefa.descricao,
            prioridade: tarefa.prioridade,
            dataInicio: tarefa.dataInicio,
            dataConclusao: dataInicio,
            duracaoEstimada: tarefa.duracaoEstimada,
            trabalhoReal: trabalhoReal,
        })
            .then((res) => {
                console.log(res.data);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Content>
            <H.Header>
                <H.Label>Edição de Task</H.Label>
                <RollbackOutlined
                    style={{ ...H.Icon }}
                    onClick={() => history.goBack()}
                />
            </H.Header>

            <H.HorizontalLine />

            <S.Inputs>
                <Input
                    placeholder='Trabalho Real'
                    style={{ ...S.Input }}
                    value={trabalhoReal}
                    onChange={(e) => [setTrabalhoReal(e.target.value)]}
                />
            </S.Inputs>

            <S.FooterButtons>
                <S.Buttons>
                    <Button
                        style={{ ...S.Button, ...S.ButtonSave }}
                        onClick={() => handleSave()}
                    >
                        Salvar Task
                    </Button>
                    <Button
                        style={{ ...S.Button, ...S.ButtonCancel }}
                        onClick={() => history.goBack()}
                    >
                        Cancelar
                    </Button>
                </S.Buttons>
            </S.FooterButtons>
        </Content>
    );
};

export default EditTask;
