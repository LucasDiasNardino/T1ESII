import React, { useEffect, useState } from "react";
import AddActivityButton from "../../components/AddActivityButton";
import ActivityCard from "../../components/ActivityCard";
import * as H from "../../styles/header";
import Content from "../../components/Content";
import { RollbackOutlined } from "@ant-design/icons";
import ActivityList from "../../components/ActivityList";
import history from "../../history";

import api from "../../api";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    // const { loading, handleLogout } = useAuth();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // if (loading) return <></>;
        // const token = localStorage.getItem("@user:token");

        // if (!token) {
        //     history.push("/");
        // }

        api.get("/atividade/listar")
            .then((res) => {
                setActivities(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Content>
                <H.Header>
                    <H.Label>Atividades</H.Label>
                    {/* <RollbackOutlined
                        style={{ ...H.Icon }}
                        onClick={handleLogout}
                    /> */}
                </H.Header>

                <H.HorizontalLine />

                <ActivityList
                    items={[<AddActivityButton id={"botao-add"} />].concat(
                        activities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                title={activity.titulo}
                                totalTasks={activity.tarefas.length}
                                isDone={activity.completo}
                                id={activity.id}
                                intialDate={activity.dataInicio}
                            />
                        ))
                    )}
                />
            </Content>
        </>
    );
};

export default Home;
