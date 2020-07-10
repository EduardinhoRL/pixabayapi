import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import ListadoImagenes from './components/ListadoImagenes'
import Paginacion from './components/Paginacion'
import Error from './components/Error'
 
const CenterError = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  top: -200px;
`

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaactual, setPaginaactual] = useState(1)
  const [totalpaginas, setTotalpaginas] = useState(5)
  const [error, setError] = useState(false)

  useEffect(() => {
    if(busqueda.trim() === '') return

    const consultarAPI = async () => {
      const imagenesPorPagina = 30
      const key = '17412394-4e23880c6c5d11c6900facb6f'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`

      const res = await fetch(url)
      const data = await res.json()

      console.log(data.hits.length);

      setTotalpaginas(Math.ceil(data.totalHits / imagenesPorPagina))
      
      setImagenes(data.hits);
      
      if(data.hits.length === 0) {
        setError(true)
        return
      }
      setError(false)

      // patalla hacia arriba
      const header = document.querySelector('#header')
      header.scrollIntoView({behavior: 'smooth'})

    }
    consultarAPI()
  }, [busqueda, paginaactual])


  return (
    <>
      <Header 
        setBusqueda={setBusqueda}
      />

      <ListadoImagenes 
        imagenes={imagenes}
      /> 

      <CenterError>
        {error ? <Error mensaje={`Error: No hay resultados de ${busqueda}`} /> : null}
      </CenterError>

      {imagenes.length !== 0 ? 
        <Paginacion 
          setPaginaactual={setPaginaactual}
          paginaactual={paginaactual}
          totalpaginas={totalpaginas}
        />
      :
        null
      }
    </>
  );
}

export default App;
