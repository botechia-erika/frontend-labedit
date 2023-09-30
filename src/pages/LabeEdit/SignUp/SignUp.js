import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { ContainerForm , ContainerSignup} from "./styledSignUp";
export function SignUp(){
const [passwordConfirm, setPasswordConfirm] = useState("")
const [data, setData] = useState({
    inputCpfCnpj: "",
    inputName: "",
    inputNickname:"",
    inputEmail: "",
    inputPassword: "",
    inputRole: "Normal",
    inputAvatar: "https://i.postimg.cc/7hq0n7Mz/orangeavatar2.jpg"
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        inputCpfCnpj: data.inputCpfCnpj,
      inputName: data.inputName,
      inputNickname: data.inputNickname,
      inputEmail: data.inputEmail,
      inputPassword: data.inputPassword,
      inputRole: data.inputRole,
      inputAvatar: data.inputAvatar
    };
    axios
      .post("http://localhost:3003/users", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  return (
    <ContainerSignup>
      <h1>CADASTRO DE USUARIOS</h1>
      <ContainerForm onSubmit={handleSubmit}>
      <label htmlFor="inputCpfCnpj">
          CPF ou CNPJ
          <input
            type="text"
            name="inputCpfCnpj"
            value={data.inputCpfCnpj}
            onChange={handleChange}
          />
        </label>
      <label htmlFor="inputName">
          Nome de Cadastro
          <input
            type="text"
            name="inputName"
            value={data.inputName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="inputNickname">
          Nickname de Cadastro
          <input
            type="text"
            name="inputNickname"
            value={data.inputNickname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="inputEmail">
          Email de Cadastro
          <input
            type="email"
            name="inputEmail"
            value={data.inputEmail}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="inputPassword">
          Senha
          <input
            type="password"
            name="inputPassword"
            value={data.inputPassword}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="passwordConfirm">
          Senha
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e)=>{setPasswordConfirm(e.target.value)}}
          />
        </label>
        <Button type="submit" bg={'orange.200'}>Login</Button>
      </ContainerForm>
    </ContainerSignup>
  );
}