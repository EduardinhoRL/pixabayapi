import React from 'react'
import styled from 'styled-components'

const CPaginacion = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`

const Botones = styled.button`
    padding: 10px 15px;
    border: none;
    outline: none;
    margin: 20px 10px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;

`

const Paginacion = ({paginaactual, setPaginaactual, totalpaginas}) => {

    const paginaAnterior = () => {

        if(paginaactual === 1) return

        setPaginaactual(paginaactual - 1)
    }

    const paginaSiguiente = () => {
        if(paginaactual >= totalpaginas) return

        setPaginaactual(paginaactual + 1)
    }

    return ( 

        <CPaginacion>
            
            {(paginaactual !== 1) ? 
                <Botones
                    type="button"
                    onClick={paginaAnterior}
                >
                    &laquo; Anterior
                </Botones>
            : 
                null
            }

            {(paginaactual !== totalpaginas) ?
                <Botones
                    type="button"
                    onClick={paginaSiguiente}
                >
                    Siguiente &raquo;
                </Botones>
            : 
                null 
            }

        </CPaginacion>

     );
}
 
export default Paginacion;