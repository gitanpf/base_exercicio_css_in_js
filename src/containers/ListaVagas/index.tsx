import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

import { ListaVagasContainer } from './styles'

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div>
      <FormVagas aoPesquisar={setFiltro} />

      <ListaVagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga key={vag.id} {...vag} />
        ))}
      </ListaVagasContainer>
    </div>
  )
}

export default ListaVagas