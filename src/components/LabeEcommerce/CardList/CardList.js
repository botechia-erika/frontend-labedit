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
  Input
} from '@chakra-ui/react';
import { CardsCtn } from './styledCardList';

export function CardList({ item, addCart }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [registerName, setRegisterName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <CardsCtn>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nome para Cadastrado"
                name="registerName"
                id="registerName"
                value={registerName}
                onChange={e => setRegisterName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="CPF ou CNPJ do Cadastrado"
                name="cpfCnpj"
                id="cpfCnpj"
                mt={'12px'}
                value={cpfCnpj}
                onChange={e => setCpfCnpj(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Username"
                name="nickname"
                id="nickname"
                mt={'12px'}
                value={nickname}
                onChange={e => setNickname(e.target.value)}
              />
              <Input
                type="password"
                placeholder="senha"
                name="password"
                id="password"
                mt={'12px'}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirmar Senha"
                name="passwordConfirm"
                id="passwordConfirm"
                mt={'12px'}
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
              />
              <Button colorScheme="blue" mr={3} type="submit" zIndex={0}>
                Submit
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

