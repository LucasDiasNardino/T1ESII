import React, { createContext, useEffect, useState } from "react";

import api from "../api";
import history from "../history";

const Context = createContext();

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("@user:token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email, password) {
        // const {
        //     data: { token },
        // } = await api.post("/login");

        console.log(email, password);

        var token = "";
        if (email === "email@email.com" && password === "123456") {
            token = "123456";
        } else {
            return {
                error: "Invalid email or password",
            };
        }

        localStorage.setItem("@user:token", JSON.stringify(token));
        setAuthenticated(true);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        history.push("/home");
    }

    async function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("@user:token");
        api.defaults.headers.Authorization = undefined;
        history.push("/");
    }

    return (
        <Context.Provider
            value={{ loading, authenticated, handleLogin, handleLogout }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, AuthProvider };
