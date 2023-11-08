import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "react-router-dom";
import history from "./history";

const App = () => {
    console.log("App");
    return (
        <AuthProvider>
            <Router history={history}>
                <RoutesApp />
                <GlobalStyle />
            </Router>
        </AuthProvider>
    );
};

export default App;
