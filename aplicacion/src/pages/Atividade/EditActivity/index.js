import React, { useEffect, useState } from "react";
import Content from "../../../components/Content";
import * as H from "../../../styles/header";
import { RollbackOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import history from "../../../history";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import { Button, Input, Switch } from "antd";
import * as S from "./style";

const EditActivity = () => {
    const { id } = useParams();
    // const { loading } = useAuth();
    const [activity, setActivity] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [titulo, setTitulo] = useState(null);
    const [dataConclusao, setDataConclusao] = useState(null);

    useEffect(() => {
        // if (loading) return <></>;
        // const token = localStorage.getItem("@user:token");

        // if (!token) {
        //     history.push("/");
        // }

        api.get("/atividade/procurar/" + id)
            .then((res) => {
                setActivity(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [activity, id]);

    function handleSave() {
        console.log(activity, isActive);
        api.put("/atividade/atualizar/" + id, {
            id: activity.id,
            titulo: titulo,
            tarefas: activity.tarefas,
            completo: isActive,
            dataConclusao: dataConclusao,
            dataInicio: activity.dataInicio,
        })
            .then((res) => {
                console.log(res.data);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onChange = (checked) => {
        setIsActive(checked);
        console.log(`switch to ${checked}`);
    };

    // setIsActive(activity.completo);

    return (
        <Content>
            <H.Header>
                <H.Label>Edição de Atividade</H.Label>
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
                    value={titulo || activity.titulo}
                    onChange={(e) => [setTitulo(e.target.value)]}
                />

                <S.completed>
                    <S.completedText>Está Completa? </S.completedText>
                    <Switch checked={isActive} onChange={onChange} />
                </S.completed>

                <Input
                    placeholder='Data de conclusão'
                    style={{ ...S.Input }}
                    value={dataConclusao || activity.dataConclusao}
                    onChange={(e) => [setDataConclusao(e.target.value)]}
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

export default EditActivity;
