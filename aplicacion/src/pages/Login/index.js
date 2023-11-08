import { Button, Input } from "antd";
import React from "react";
import * as S from "../../styles/input-screen";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import history from "../../history";

const Login = () => {
    const { handleLogin } = useAuth();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    async function handleClick() {
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        const res = await handleLogin(email, password);

        if (res?.error) {
            setError(res.error);
            return;
        }

        history.push("/home");
    }

    return (
        <>
            <S.Container>
                <S.Content>
                    <S.Label>Login</S.Label>
                    <Input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => [
                            setEmail(e.target.value),
                            setError(""),
                        ]}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => [
                            setPassword(e.target.value),
                            setError(""),
                        ]}
                    />

                    <Button
                        type='primary'
                        onClick={handleClick}
                        style={{
                            marginTop: "5vh",
                            width: "100%",
                            height: "5vh",
                            fontSize: "14px",
                            textAlign: "center",
                            justifyItems: "center",
                        }}
                    >
                        Enter
                    </Button>

                    <S.ErrorLabel>{error}</S.ErrorLabel>

                    <S.SignUpLabel>
                        Don't have an account?
                        <S.Strong>
                            <Link to='/signup'> Sign Up</Link>
                        </S.Strong>
                    </S.SignUpLabel>
                </S.Content>
            </S.Container>
        </>
    );
};

export default Login;
