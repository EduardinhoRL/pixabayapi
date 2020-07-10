import React, {useState} from 'react'
import styled from 'styled-components'
import Error from './Error'

const Cabecera = styled.header`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0 90px;
    background: #A568F5;
    position: relative;

    @media (max-width: 1100px) {
        height: 300px;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        background: #A568F5;
        right: 0;
        bottom: -100px;
        z-index: -1;
    }

    h1 {
        color: #fff;
        font-size: 50px;
        margin-bottom: 30px; 
        font-family: 'Montserrat', sans-serif;
        text-transform: capitalize;

        @media (max-width: 1100px) {
            font-size: 25px
        }
    }
`

const Form = styled.form` 
    width: 60%; 
    display: grid;
    grid-template-columns: 1fr 130px;
    overflow: hidden;
    border-radius: 30px;
    margin-top: 30px; 

    @media (max-width: 1100px) {
        width: 70%; 
    }
    
    @media (max-width: 650px) { 
        width: 85%; 
        grid-template-columns: 1fr;
    } 
`

const Inputs = styled.input`
    padding: 20px;
    border: none;
    outline: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
`

const Header = ({setBusqueda, setPaginaactual}) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    const buscarImagen = e => {
        e.preventDefault()

        setPaginaactual(1)

        // validar 
        if(termino.trim() === ''){
            setError(true)
            return
        }setError(false)

        setBusqueda(termino)
    }

    return ( 
        <Cabecera id="header">
            <h1>Busca Cualquier imagen</h1>

            {error ? <Error mensaje="Error: Campo de Busqueda Vacío"/> : null}

            <Form
                onSubmit={buscarImagen}
            >
                <Inputs
                    type="text"
                    placeholder="buscar imagenes..."
                    onChange={e => setTermino(e.target.value)}
                />
                <Inputs 
                    type="submit"
                    value="Buscar"
                />
            </Form>
        </Cabecera>
     );
}
 
export default Header;