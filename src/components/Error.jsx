import React from 'react'
import styled from 'styled-components'

const MensajeError = styled.span`
    padding: 10px 25px;
    font-weight: 700;
    background: #FF9595;
    color: #c75151;
    font-family: 'Montserrat', sans-serif;
`

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>
            {mensaje}
        </MensajeError>
     );
}
 
export default Error;