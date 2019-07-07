import React, { FunctionComponent, useState } from "react";
import { Form, Input, SubmitButton } from '../../shared-style';
import { userApi } from '../../api';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps{

}


const SignIn:FunctionComponent<Props> = ({history}) => {
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const handleOnSubmit = async (email: string, password: string,) => {
      userApi.postSignIn(email, password).then((res: any) =>{
          const { data: jwt } = res
          localStorage.setItem("jwt", jwt);
          history.push("/")
          window.location.reload()
      }
      )
    }
    const InputHandler = (type: string, name: string, placeholder: string, value: any, setter: any) => {
        const onChange = (e: any) => {
            const { target: { value }} = e;
            setter(value);
        }
        return {type,name, placeholder, value, onChange }
    }
        return (
            <Form onSubmit={(e: any) => { 
                e.preventDefault();
                handleOnSubmit(email, password)}}
            >
               <Input {...InputHandler("text", "email", "이메일",email, set_email)}/>
            <Input {...InputHandler("text", "password", "비밀번호",password, set_password)}/>
            <SubmitButton >로그인</SubmitButton>
            </Form>
        )
}



export default SignIn;