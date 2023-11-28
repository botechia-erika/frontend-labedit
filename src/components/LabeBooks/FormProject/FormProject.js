import {useState, useEffect} from 'react'
import {Select } from '@chakra-ui/react'
import { InputField } from '../Input/InputField'
import {FormContainer} from './styled.FormProject'
import {ButtonLabeBook} from '../ButtonLabeBook/ButtonLabeBook'

import ProjectAdvice from './ProjectAdvice/ProjectAdvice'
import useForm from '../../../hooks/useForm'
export  function FormProject() {
  const [users, setUsers]=useState( [])
  const {formState, handleInputChange}= useForm({
    inputName: '',
    createdAt: '',
    inputStack: '',
    inputAuthor: '',
    inputScore: '',
    inputDescription: '',
    inputDeploy: '',
    inputRepo: '',
    inputImg: ''
   })
  
   const {inputName, createdAt, stack, inputAuthor, score, inputDescription, inputDeploy, inputRepo, inputImg} = formState
   
   const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {...formState}
    ;
    axios
      .post("http://localhost:3003/projects", formData)
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
    <>
<FormContainer>
  <h2>Prencha os Dados para Criar o Card do seu Projeto</h2>
  <hr/>
  <label htmlForm="inputStack">
    Selecione uma Stack
  </label>
  <select name="inputStack" id="inputStack">

  <option value="Fundamentos">Fundamentos</option>
  <option value="Frontend">Frontend</option>
  <option value="Backend">Backend</option>
  <option value="Fullstack">Fullstack</option>
  <option value="Testing">Testing</option>
</select>
  <InputField
  labelText={'Nome do Projeto'}
  inputValue={inputName}
  inputName={'inputName'}
  inputPlaceholder={'Projeto Pilares React'}
  handleInputChange={handleInputChange}
  />
    <InputField
  labelText={'id cadastrada do autor'}
  inputValue={inputAuthor}
  inputName={'inputAuthor'}
  inputPlaceholder={'id do autor'}
  handleInputChange={handleInputChange}
  />

      <InputField
  labelText={'Descricao do projeto'}
  inputValue={inputDescription}
  inputName={'inputDescription'}
  inputPlaceholder={'Projeto Pilares React'}
  handleInputChange={handleInputChange}
  />
      <InputField
  labelText={'link do inputDeploy'}
  inputValue={inputDeploy}
  inputName={'inputDeploy'}
  inputPlaceholder={'https://seu-projeto.com.br'}
  handleInputChange={handleInputChange}
  />
      <InputField
  labelText={'link url inputRepo'}
  inputValue={inputRepo}
  inputName={'inputRepo'}
  inputPlaceholder={'https://github.com/seu-github-name/seu-projeto'}
  handleInputChange={handleInputChange}
  />
        <InputField
  labelText={'link url img'}
  inputValue={inputImg}
  inputName={'inputImg'}
  inputPlaceholder={'URL da imagem subida em link'}
  handleInputChange={handleInputChange}
  />

<ButtonLabeBook>
  <span>
<i class="fa-solid fa-paper-plane" ></i>
</span> Criar Card
</ButtonLabeBook>
</FormContainer>
</>
  )
}
