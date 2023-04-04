import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../components/Pagina';

const pagina2 = () => {
  return (
    <>
      <Pagina titulo="Pagina 2" nome="Rogerio Matos">
      <Container>
        
      <h1>Qualquer Texto</h1>
        <p>Qualquer Texto</p>
        <p>Qualquer Texto</p>
        <p>Qualquer Texto</p>
      

      </Container>
      </Pagina>
    </>
  )
}

export default pagina2