import {useState} from 'react'
import { CtnLabeBooks } from './styled.LabeBooks'
import { Banner } from '../../components/LabeBooks/Banner/Banner'
import { FormProject } from './../../components/LabeBooks/FormProject/FormProject'

import { ProjectList } from './../../components/LabeBooks/ProjectList/ProjectList'

export function LabeBooks() {
const [labeView, setLabeView] = useState(1)
const [labePage, setLabePage] = useState(<FormProject/>)
const handleLabeBooksView = (e)=>{
  if(labeView === 1){
  setLabePage(<FormProject/>)
  setLabeView (2)
}else if(labeView === 2){
  setLabePage(<ProjectList/>)
  setLabeView (1)
}
}

  return (
    <CtnLabeBooks>
<Banner
handleProjects={(e)=>{setLabeView(1)}}

handleCardsRegister={(e)=>{setLabeView(1)}}  

/>

<ProjectList/>
 </CtnLabeBooks>

  )
}
