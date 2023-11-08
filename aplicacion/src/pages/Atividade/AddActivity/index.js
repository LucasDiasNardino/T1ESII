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

const AddActivity = () => {
    // const { id } = useParams();
    // const { loading } = useAuth();
    const [titulo, setTitulo] = useState("");

    // useEffect(() => {
    //     if (loading) return <></>;
    //     const token = localStorage.getItem("@user:token");

    //     if (!token) {
    //         history.push("/");
    //     }
    // }, [loading]);

    function handleSave() {
        const data = new Date().toISOString().split("T")[0];
        const year = data.split("-")[0];
        const month = data.split("-")[1];
        const day = data.split("-")[2];

        const dataInicio = day + "/" + month + "/" + year;
        api.post("/atividade/cadastrar", {
            titulo: titulo,
            tarefas: [],
            completo: false,
            dataConclusao: "",
            dataInicio: dataInicio,
        })
            .then((res) => {
                console.log(res.data);
                history.push("/atividade/" + res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Content>
            <H.Header>
                <H.Label>Criação de Atividade</H.Label>
                <RollbackOutlined
                    style={{ ...H.Icon }}
                    onClick={() => history.goBack()}
                />
            </H.Header>

            <H.HorizontalLine />

            <S.Inputs>
                <Input
                    placeholder='Título'
                    style={{ ...S.Input }}
                    value={titulo}
                    onChange={(e) => [setTitulo(e.target.value)]}
                />
            </S.Inputs>

            <S.FooterButtons>
                <S.Buttons>
                    <Button
                        style={{ ...S.Button, ...S.ButtonSave }}
                        onClick={() => handleSave()}
                    >
                        Salvar Atividade
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

export default AddActivity;
