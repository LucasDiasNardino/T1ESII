import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import useAuth from "../hooks/useAuth";
import Task from "../pages/Tarefa/Task";
import Activity from "../pages/Atividade/Activity";
import EditActivity from "../pages/Atividade/EditActivity";
import AddActivity from "../pages/Atividade/AddActivity";
import AddTask from "../pages/Tarefa/AddTask";
import EditTask from "../pages/Tarefa/EditTask";

function CustomRoute({ isPrivate, ...rest }) {
    // const { authenticated, loading } = useAuth();

    console.log({ ...rest });

    // if (loading) {
    //     return <h1>Loading...</h1>;
    // }

    // if (isPrivate && !authenticated) {
    //     return <Redirect to={"/"} />;
    // }

    return <Route {...rest} />;
}

const RoutesApp = () => {
    return (
        <Switch>
            <CustomRoute
                exact
                path='/atividade/cadastrar'
                component={AddActivity}
            />
            <CustomRoute
                path='/atividade/atualizar/:id'
                component={EditActivity}
            />
            <CustomRoute path='/atividade/:id' component={Activity} />

            <CustomRoute
                exact
                path='/tarefa/cadastrar/:id'
                component={AddTask}
            />
            <CustomRoute path='/tarefa/atualizar/:id' component={EditTask} />
            <CustomRoute path='/tarefa/:id' component={Task} />

            <CustomRoute exact path='/signup' component={SignUp} />
            <CustomRoute exact path='/home' component={Home} />
            <CustomRoute path='/' component={Home} />
            <CustomRoute path='*' component={Home} />
        </Switch>
    );
};

export default RoutesApp;
