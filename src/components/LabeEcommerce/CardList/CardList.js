import React, { useState } from 'react';
import {useForm} from "../../../hooks/useForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
useDisclosure,
  Input,

} from '@chakra-ui/react';
import { CardsCtn } from './styledCardList';

export function CardList({ item, addCart }) {



  const onChangeConfirmPassword = (e)=> {
  e.target.value === password?(
      setForm({...form, passwordConfirm: e.target.value})
  ): (
      alert("confirmação de senha não correspondente")
  )
  }


   /*ry {
      const response = await fetch('http://localhost:3003/users', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('user cadastrado com sucesso')
      } else {
        alert('confira os dados do formulario ')
      }
    } catch (error) {
      // Handle error
    }
  };*/
  const [password, setPassword] = useState('');

const { isOpen, onOpen, onClose } = useDisclosure();

const handleSubmit =(e)=>{
  e.preventDefault()
}




    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou

    const {form , onChangeForm} = useForm({registername: "" , username: "", email: "", password: "", password_password: ""})

    const enviarCadastro = () => {

      //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou

      if (form.password === form.password_password) {

        console.log(form.registername , form.username, form.email, form.password_password)

      }

    }


    return (
    <CardsCtn>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={enviarCadastro} method={'POST'} action={'http://localhost:3003/users'} >
              <Input
                type="text"
                placeholder="Nome para Cadastrado"
                name="registerName"
                id="registerName"
                value={form.registerName}
                onChange={onChangeForm}
                title={"Nome de Registro , Nome Social ou Razão Social"}
                required
              />
              <Input
                type="text"
                placeholder="CPF ou CNPJ do Cadastrado"
                name="cpfCnpj"
                id="cpfCnpj"
                mt={'12px'}
                value={form.cpfCnpj}
                onChange={onChangeForm}
              required
                title={"CPF : 'ex: 440.999.222-43' ou CNPJ : 'ex: 09.840.590/0001-35''"}
              />
              <Input
                type="text"
                placeholder="Username"
                name="nickname"
                id="nickname"
                mt={'12px'}
                value={form.nickname}
                onChange={onChangeForm}
              />
              <Input
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  id="email"
                  mt={'12px'}
                  value={form.email}
                  onChange={onChangeForm}
              />
              <Input
                type="password"
                placeholder="senha"
                name="password"
                id="password"
                mt={'12px'}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <Input
                type="password"
                placeholder="Confirmar Senha"
                name="passwordConfirm"
                id="passwordConfirm"
                mt={'12px'}
                value={form.passwordConfirm}
                onChange={onChangeForm}
              />
              <Button  type="submit" colorScheme="blue" mr={3} type="submit" zIndex={0} onClick={enviarCadastro}>
               ENVIAR
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} zIndex={0}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 
     
            <div>
              <h3>{item.name}</h3>
              <p>Alugue Mensal</p>
              <img src={item.image_url} alt={'imagem do produto'} />

              <p>R$: {item.price.toFixed(2)}</p>
              <p>{item.description}</p>
              <Button onClick={onOpen} zIndex={0}>
                Alugar
              </Button>
              <Button onClick={()=>{addCart(item)}}>Adicionar a Carrinho</Button>
            </div>

    </CardsCtn>
  );
}

