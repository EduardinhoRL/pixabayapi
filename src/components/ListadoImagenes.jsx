import React from 'react';
import Imagen from './Imagen'
import styled from 'styled-components'

const ContentAll = styled.div`
    background: #fff;
    border-radius: 0 90px 0 0;
    padding: 50px 0;
    min-height: 400px;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 800px;
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 500px;
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
        max-width: 300px; 
    } 
`

const ListadoImagenes = ({imagenes}) => {

    return ( 

        <ContentAll>
            <Container>
                {imagenes.map(imagen => (
                    <Imagen 
                        key={imagen.id}
                        imagen={imagen}
                    />
                ))}
            </Container>
        </ContentAll>
     );
}
 
export default ListadoImagenes;