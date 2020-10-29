import React from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
    @media (min-width: 480px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        row-gap:2rem;
        column-gap:2rem;
    }

    @media (min-width: 768px){
        grid-template-columns:repeat(3, 1fr);
    }
`;

const Card = styled.div `
    border:3px solid #b5b5b5;
    background-color:#f5f5f5;
    border-radius:3px;

    img{
        max-width:100%;
    }
`;

const Contenido = styled.div`
    padding:1rem;

    h3{
        margin: 0 0 2rem 0;
        font-size:1.4rem;
        font-family: 'Lato', sans-serif;
    }

    ul{
        list-style:none;
        padding:0;
        display: flex;
        width:100%;
        justify-content:space-between;
    }
    ul li{
        display: flex;
    }
    ul li {
        font-family:'Lato', sans-serif;
        font-weight:900;
    }

    ul li img{
        margin-right:1rem;
    }
    p{
        font-family:'Lato', sans-serif;
        font-weight:600; 
    }
`;


const useEstudioj = (estudio) => {
  

    // console.log(estudio);
        const Estudioj = () => (
                <Grid>
                    {estudio.map(estud =>(
                        <Card key={estud.id}>
                            <img src={`https://sistem-distri.herokuapp.com${estud.imagen.url}`}/>
                            <Contenido>
                                <h3>{estud.nombre}</h3>
                                <ul>
                                    
                                    <li> Precio: ${estud.precio}</li>
                                    <li>Cantidad: {estud.cantidad} Unidades</li>
                                </ul>
                                <p>Descripcion:<br/> {estud.descripcion}</p>
                            </Contenido>
                        </Card>
                    ))}
                </Grid>
        )


       return {
           Estudioj
       }
}
 
export default useEstudioj;