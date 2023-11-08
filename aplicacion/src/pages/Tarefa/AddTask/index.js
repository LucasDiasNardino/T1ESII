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

const AddTask = () => {
    const { id } = useParams();
    // const { loading } = useAuth();
    const [assunto, setAssunto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [duracao, setDuracao] = useState("");

    // useEffect(() => {
    //     if (loading) return <></>;
    //     const token = localStorage.getItem("@user:token");

    //     if (!token) {
    //         history.push("/");
    //     }
    // }, [loading]);

    function handleSave() {
        console.log(new Date().toISOString().split("T")[0]);
        const data = new Date().toISOString().split("T")[0];
        const year = data.split("-")[0];
        const month = data.split("-")[1];
        const day = data.split("-")[2];

        const dataInicio = day + "/" + month + "/" + year;

        api.post("/tarefa/cadastrar", {
            idAtividade: id,
            assunto: assunto,
            descricao: descricao,
            prioridade: prioridade,
            dataInicio: dataInicio,
            dataConclusao: "",
            duracaoEstimada: duracao,
            trabalhoReal: 0,
        })
            .then((res) => {
                console.log(res.data);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });

        history.goBack();
    }

    return (
        <Content>
            <H.Header>
                <H.Label>Criação de Task</H.Label>
                <RollbackOutlined
                    style={{ ...H.Icon }}
                    onClick={() => history.goBack()}
                />
            </H.Header>

            <H.HorizontalLine />

            <div
                style={{
                    overflowY: "scroll",
                }}
            >
                <S.Inputs>
                    <Input
                        placeholder='Assunto'
                        style={{ ...S.Input }}
                        value={assunto}
                        onChange={(e) => [setAssunto(e.target.value)]}
                    />
                    <Input
                        placeholder='Descricao'
                        style={{ ...S.Input }}
                        value={descricao}
                        onChange={(e) => [setDescricao(e.target.value)]}
                    />
                    <Input
                        placeholder='Prioridade'
                        style={{ ...S.Input }}
                        value={prioridade}
                        onChange={(e) => [setPrioridade(e.target.value)]}
                    />
                    <Input
                        placeholder='Duracao Estimada'
                        style={{ ...S.Input }}
                        value={duracao}
                        onChange={(e) => [setDuracao(e.target.value)]}
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
            </div>
        </Content>
    );
};

export default AddTask;
