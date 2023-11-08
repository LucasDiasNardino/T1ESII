import { Button, Input } from "antd";
import React from "react";
import * as S from "../../styles/input-screen";
import { Link } from "react-router-dom";
import history from "../../history";
import api from "../../api";

const SignUp = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSignUp = () => {
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        api.post("/user/cadastrar", {
            email,
            senha: password,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        history.push("/");
    };

    return (
        <S.Container>
            <S.Content>
                <S.Label>Sign Up</S.Label>
                <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
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
                <Input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => [
                        setConfirmPassword(e.target.value),
                        setError(""),
                    ]}
                />
                <Button
                    type='primary'
                    onClick={handleSignUp}
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
                    Already have an account?
                    <S.Strong>
                        <Link to='/'> Sign In</Link>
                    </S.Strong>
                </S.SignUpLabel>
            </S.Content>
        </S.Container>
    );
};

export default SignUp;
