//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {

  return (
    <>
    <Pagina titulo="Pagina Incial" nome="Ismael Correia">
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
