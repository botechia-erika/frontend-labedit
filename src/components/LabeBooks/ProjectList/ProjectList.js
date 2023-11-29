import React from 'react'
import { CardItem } from '../CardItem/CardItem'
import {URLAPI} from './../../../constants/URLAPI'
import {LoaderComponent} from './../../../components/LoaderComponent/LoaderComponent'
import {useRequestData} from './../../../hooks/useRequestData'
import {ProjectListContainer} from './styled.ProjectList'
import { ErrorComponent } from '../../ErrorComponent/ErrorComponent'
export  function ProjectList() {

  const [projects, isLoading, isError] = useRequestData(`${URLAPI}projects`, [])
  console.log(projects)
  


  return (
    <ProjectListContainer>
      <h2>ProjectList</h2>
  {isLoading && <LoaderComponent/> }
  {isError && <ErrorComponent/> }
  {projects && 
      <ul>
      {projects.map((project, indice)=>(
        <CardItem key={indice} project={project}/>
      ))}
    </ul>
  }
    </ProjectListContainer>
  )
}
