import React, { useEffect, useState} from 'react';
import Head from 'next/head';
import useEstudioj from '../hooks/useEstudioj';
import useFiltro from '../hooks/useFiltro';

import axios from 'axios';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const Contenedor = styled.div`
  margin:0 auto;
  width:95%;
  max-width:1200px;
`;


const  Home = () => {


  const [estudio, guardarEstudio] = useState([]);
  const [filtradas, guardarFiltradas] = useState([]);
  const {Estudioj} = useEstudioj(filtradas);
  const {categoria, FiltroUI} = useFiltro();

  // llamado a la api

  useEffect(() =>{

    if(categoria){

      //Filtrar por categorias
   
      const filtradass = estudio.filter(estud => estud.categoria.id == categoria);
      
  
      guardarFiltradas(filtradass);
    
    
    }else{
      const obtenerEstudio = async () =>{
        const resultado = await axios.get('https://sistem-distri.herokuapp.com/reg-productos');
  
  
        guardarEstudio(resultado.data);

        guardarFiltradas(resultado.data);
      }
  
      obtenerEstudio();
    }

   
    
  }, [categoria])


   return (
      <Contenedor>
        <Head>
          <title>Estudio J</title>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
        </Head>
        <FiltroUI/>
        <h2
        css = {css`
          text-align:center;
          font-family: 'Lato', sans-serif;
        `}
        >Estudio J</h2>
         <Estudioj/>
      </Contenedor>
    
  
   )
}
export default Home;