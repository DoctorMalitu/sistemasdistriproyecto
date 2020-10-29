import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Formulario = styled.form`
    width:100%;
    display:flex;
    margin-top:2rem;
    border:4px solid #e1e1e1;
    border-radius:10px;
`;

const Select = styled.select`
    flex:1;
    padding:1rem;
    border:none;
    text-align:center;
    font-family:'Lato', sans-serif;
    appearance: none;
    background-color:white;
`;

const useFiltro = () =>{

    const [categorias, guardarCategorias] = useState([]);
    const [categoria, guardarCategoria] = useState('');

    useEffect(() =>{
        const obtenerCategorias = async () =>{
            const resultado = await axios.get('https://sistem-distri.herokuapp.com/categorias');
            guardarCategorias(resultado.data);
        
        }
        obtenerCategorias();
    }, []);

    const FiltroUI = () =>(
        <Formulario>
            <Select
                onChange={e => guardarCategoria(e.target.value) }
                value={categoria}
            >
                <option value="">TODO</option>
                {categorias.map(opcion =>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </Formulario>
    )

    

    return {
        categoria,
        FiltroUI
    };
}

export default useFiltro;