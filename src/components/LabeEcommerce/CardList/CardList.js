import React, { useState } from 'react';
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
  onClose
} from '@chakra-ui/react';
import { CardsCtn } from './styledCardList';
import { ModalApi } from '../LabeFrota/ModalApi/ModalApi';

export function CardList({ item , addCart, click}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [registerName, setRegisterName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('')
  const [tela, setTela] = useState(1)
  const [cartList, setCartList] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      registerName,
      cpfCnpj,
      nickname,
      email,
      password,
      passwordConfirm,
    };
    try {
      const response = await fetch('http://localhost:3003/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
         alert('usuario cadastrado com sucesso')
      } else {
        alert('confira os dados do formulario')
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <CardsCtn>

      <Modal isOpen={isOpen} onClose={onClose}>
 <ModalContent>
 {tela === 1?
  (      <ModalApi
            handleSubmit={handleSubmit}
            cpfCnpj={cpfCnpj}
            registerName={registerName}
            nickname={nickname}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            onClose={onClose}
            changeTela={()=>{setTela(2)}}
          />
        
      ):(
<div>
<ModalCloseButton />
          <h2>TELA 2</h2>
     
        </div>
        )  }    </ModalContent>
 
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
              <Button onClick={addCart(item)} disable={click}>Favoritos</Button>
            </div>

    </CardsCtn>
  );
}

