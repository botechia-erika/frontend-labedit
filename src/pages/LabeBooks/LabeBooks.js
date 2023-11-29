import {useState} from 'react'
import { CtnLabeBooks } from './styled.LabeBooks'
import { Banner } from '../../components/LabeBooks/Banner/Banner'
import { FormProject } from './../../components/LabeBooks/FormProject/FormProject'
import { LikesDislikesProvider } from '../../context/likesDislikes-context'
import { ProjectList } from './../../components/LabeBooks/ProjectList/ProjectList'

export function LabeBooks() {
const [labeView, setLabeView] = useState(1)
const [labePage, setLabePage] = useState(<FormProject/>)
const handleLabeBooksView = (e)=>{
  if(labeView === 1){
  setLabeView (2)
}else if(labeView === 2){
  setLabeView (1)
}
}


const handleProjects=(e)=>{setLabeView(1)}
const handleCardsRegister=(e)=>{setLabeView(2)}
  return (
    <>
    <LikesDislikesProvider>
    <CtnLabeBooks>
<Banner

handleCardsRegister={handleCardsRegister}
handleProjects={handleProjects}

/>
{labeView === 2 && <FormProject/> } {labeView === 1 && <ProjectList/>}

 </CtnLabeBooks>
 </LikesDislikesProvider>
 </>
  )
}
