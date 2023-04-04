import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';


const array = () => {

const carros = ['Opala 71 Azul', 'Fuscão', 'Classic', 'Ka', 'Brasília Amarela']

  return (
    <>
    <Pagina titulo="Array" nome="Ismael Matos">
      <ol>
      {carros.map(item=>(

          <li>{item}</li>
       
      ))}
   </ol>
    </Pagina>
    </>
  )
}

export default array