import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    vertical-align: top;
    transition: transform .3s ease;

    &:hover {
        transform: scale(1.1)
    }
`

const Imagen = ({imagen}) => {


    return ( 
        <div>
            <a 
                href={imagen.largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img src={imagen.previewURL} />
            </a>
            
        </div>
     );
}
 
export default Imagen;