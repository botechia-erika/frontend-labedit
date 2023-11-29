import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react'

export function ModalApi({changeTela, handleSubmit, onClose, nickname, cpfCnpj, registerName, email, password, passwordConfirm}){
  return(
    <>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <form onSubmit={handleSubmit} method="POST" action="http://localhost:3003/users">
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
          type="email"
          placeholder="email@email.com"
          name="email"
          id="email"
          mt={'12px'}
          value={email}
          onChange={e => setEmail(e.target.value)}
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
        <Button  colorScheme="blue" mr={3} type="submit" zIndex={0}>
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
      <Button variant="ghost" onClick={changeTela}>Já Tenho Cadastro</Button>
    </ModalFooter>
 </>
  )
}