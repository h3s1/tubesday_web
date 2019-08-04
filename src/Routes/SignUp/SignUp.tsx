import React, { FunctionComponent, useState } from "react";
import { userApi } from '../../api';
import { Form, Input, SubmitButton } from '../../shared-style';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {

}

const SignUp: FunctionComponent<Props> = ({ history }) => {
    const [nickname, set_nickname] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [avatar_url, set_avatar_url] = useState("");
    const handleOnSubmit = (nickname: string, email: string, password: string, avatar_url: string) => {
        userApi.postSignUp(nickname, email, password, avatar_url).then((res: any) => {
            console.log(res);
            const { status } = res;
            switch (status) {
                case 200:
                    userApi.postSignIn(email, password).then((res: any) => {
                        const { data: jwt } = res;
                        localStorage.setItem("jwt", jwt);
                        history.push("/")
                        window.location.reload();
                    });
                    break;
                case 400:
                    console.error('sign up fail');
                    break;
                default:
                    break;
            }
        }).catch(error => console.error(error.message));
    }
    const InputHandler = (type: string, name: string, placeholder: string, value: any, setter: any) => {
        const onChange = (e: any) => {
            const { target: { value } } = e;
            setter(value);
        }
        return { type, name, placeholder, value, onChange }
    }

    return (
        <Form onSubmit={(e: any) => {
            e.preventDefault();
            handleOnSubmit(nickname, email, password, avatar_url)
        }}
        >
            <Input {...InputHandler("text", "nickname", "닉네임", nickname, set_nickname)} />
            <Input {...InputHandler("text", "email", "이메일", email, set_email)} />
            <Input {...InputHandler("text", "password", "비밀번호", password, set_password)} />
            <Input {...InputHandler("text", "image_url", "아바타 URL", avatar_url, set_avatar_url)} />
            <SubmitButton >가입하기</SubmitButton>
        </Form>
    )
}

export default SignUp;