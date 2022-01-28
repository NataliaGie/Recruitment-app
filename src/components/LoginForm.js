import { useState } from "react";
import {
    LoginFormPage,
    MainTitle,
    FormWrapper,
    FormTitle,
    FormItemWrapper,
    FormInput,
    FormLabel,
    SubmitFormButton,
    ErrorMessage
} from "./LoginForm.styles";

function LoginForm({login, error}) {
    const [userInfo, setUserInfo] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        login(userInfo);
    }

    return (
        <LoginFormPage onSubmit={submitHandler}>
            <MainTitle>Welcome in Recruitment App!</MainTitle>
            <FormWrapper>
                <FormTitle>Login</FormTitle>
                {(error != "") ? <ErrorMessage>{error}</ErrorMessage> : ""}
                <FormItemWrapper>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <FormInput type="text" name="name" id="name" value={userInfo.name}
                               onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
                </FormItemWrapper>
                <FormItemWrapper>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput type="email" name="email" id="email" value={userInfo.email}
                               onChange={e => setUserInfo({...userInfo, email: e.target.value})}/>
                </FormItemWrapper>
                <FormItemWrapper>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <FormInput type="password" name="password" minLength="5" id="password" value={userInfo.password}
                               onChange={e => setUserInfo({...userInfo, password: e.target.value})}/>
                </FormItemWrapper>
                <SubmitFormButton type="submit">login</SubmitFormButton>
            </FormWrapper>
        </LoginFormPage>
    );
}

export default LoginForm;