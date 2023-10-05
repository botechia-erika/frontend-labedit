import React, { useState } from "react";
import { ContainerForm, ContainerSignup } from "./styledSignUp";
import { useForm } from "../../../hooks/useForm";
import { Input, Button, Box } from "@chakra-ui/react";
export function SignUp() {
  const { form, onChangeForm } = useForm({
    registername: "",
    username: "",
    email: "",
    password: "",
    password_password: "",
  });
  const enviarCadastro = () => {
    if (form.password === form.password_password) {
      console.log(
        form.registername,
        form.username,
        form.email,
        form.password_password
      );
    }
  };

  return (
    <div className="banner">
      <form onSubmit={enviarCadastro}>
        {/*em lugar de funcionario agrega registername */}
        <Box m={"auto"} mt={"-5px"}>
          <h2>Bem-Vindo!</h2>
          <p>Esse é o labeEdit o projeto de redes sociais da Labenu</p>
        </Box>
        <Box p={"4"}>
          <Input
            id={"registername"}
            name={"registername"}
            value={form.registername}
            onChange={onChangeForm}
            placeholder="nome para cadastro"
            type="text"
            mb={"15px"}
          />
          <Input
            id={"username"}
            name={"username"}
            value={form.username}
            onChange={onChangeForm}
            placeholder="username"
            type="text"
            required
            mb={"15px"}
          />
          <Input
            id="email"
            name="email"
            value={form.email}
            pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
            onChange={onChangeForm}
            placeholder="nome@email.com"
            type="email"
            required
            title="o campo devera ser email valido ex: 'user@email.com'"
            mb={"15px"}
          />
          <Input
            name={"password"}
            id={"password"}
            value={form.password}
            onChange={onChangeForm}
            placeholder="Crie sua senha"
            type="password"
            required
            mb={"16px"}
            title="senha deve ter de 8 a 12 caracteres e conter pelo menos 1 numero, 1 letra maiuscula e 1 caracter especial $*&@#!'"
            /* pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#!]{8,12}$/'*/
          />
          <Input
            id="password_password"
            name="password_password"
            value={form.password_password}
            onChange={onChangeForm}
            placeholder="Confirme a senha"
            type="password"
            required
          />
          <Button mt={"30px"}>Cadastrar</Button>
        </Box>
      </form>
    </div>
  );
}
