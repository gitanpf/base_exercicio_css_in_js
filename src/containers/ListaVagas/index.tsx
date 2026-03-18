import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import ListaVagasContainer from './styles'

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor back-end',
    localizacao: 'presencial',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 7000,
    requisitos: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 3,
    titulo: 'Fullstack',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 8000,
    salarioMax: 12000,
    requisitos: ['React', 'Node', 'TypeScript']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <>
      <FormVagas aoPesquisar={setFiltro} />
      <ListaVagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga key={vag.id} {...vag} />
        ))}
      </ListaVagasContainer>
    </>
  )
}

export default ListaVagas
