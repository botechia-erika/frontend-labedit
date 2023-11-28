import {useState} from 'react'
import { InputField } from '../Input/InputField'
import {FormContainer} from './styled.FormProject'
export  function FormProject() {
  const [formState, setFormState] = useState({
    projectName: '',
    createdAt: '',
    stack: '',
    author: '',
    score: '',
    description: '',
    deploy: '',
    repo: '',
    imgUrl: ''
   })
  
   const {projectName, createdAt, stack, author, score, description
   , deploy, repo, imgUrl} = formState
   
   const handleInputChange = ()=>{
    
   }
  return (
<FormContainer>
  <h2>Prencha os Dados para Criar o Card do seu Projeto</h2>
  <InputField
  labelText={'Nome do Projeto'}
  inputValue={'ProjectName'}
  inputName={projectName}
  inputPlaceholder={'Projeto Pilares React'}
  handleInputChange={handleInputChange}
  />
    <InputField
  labelText={'id cadastrada do autor'}
  inputValue={'author'}
  inputName={author}
  inputPlaceholder={'id do autor'}
  handleInputChange={handleInputChange}
  />
      <InputField
  labelText={'Descricao do projeto'}
  inputValue={'Description'}
  inputName={description}
  inputPlaceholder={'Projeto Pilares React'}
  handleInputChange={handleInputChange}
  />
      <InputField
  labelText={'link do deploy'}
  inputValue={'deploy'}
  inputName={deploy}
  inputPlaceholder={'https://seu-projeto.com.br'}
  handleInputChange={handleInputChange}
  />
      <InputField
  labelText={'link url repo'}
  inputValue={'repo'}
  inputName={repo}
  inputPlaceholder={'http://github.com/seu-github-name/seu-projeto'}
  handleInputChange={handleInputChange}
  />
        <InputField
  labelText={'link url img'}
  inputValue={'imgUrl'}
  inputName={imgUrl}
  inputPlaceholder={'URL da imagem subida em link'}
  handleInputChange={handleInputChange}
  />
</FormContainer>
  )
}
