import React, {useState} from 'react'
import { Box, Input } from '@chakra-ui/react'
import {AdminCtn} from './styledAdmin'
export function LabeAdmin() {
  const [formType, setFormType] = useState(1)
  const [titleType, setTitleType] = useState("Carro")

const changeContent = (formType, titleType )=>{
  if(formType === 1){
  setTitleType("CARROS")
  }
}








  return (

    <AdminCtn>
    <header>
	<h2>HEADER</h2>
    </header>
    <main>
        <aside>
	<p>aside</p>
	</aside>
	<section><h2>Formulario para {titleType}</h2>
  <form action="" method='post'>
       <p>
            <label for="brandInput">Nome da Marca: </label>
            <Input type="text" id="brandInput" name="brandInput" placeholder="ex: 'VOLKWAGEM'" w={'200px'} mb={'20px'}/>
          </p>
          <p>
            <label for="modelInput">Modelo: </label>
            <Input type="text" id="modelInput" placeholder="ex. 'GOL'" name='modelInput' w={'200px'} mb={'20px'}/>
          </p>  
          <p>
            <label for="idInput">Placa </label>
            <Input type="text" id="idInput" name="idInput" w={'200px'} placeholder="ex : 'DAS-9987" mb={'20px'}/>
</p>  
            
            <button type="submit">Fazer Login</button>
            
    </form>
   
   </section>
	<nav>
	<button>button</button>
	</nav>
    </main>
    <footer>
	<p>footer</p>
    </footer>
</AdminCtn>

  )
}
