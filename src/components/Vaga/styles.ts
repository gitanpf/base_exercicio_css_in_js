import styled from 'styled-components'

export const Card = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Link = styled.a`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  margin-top: 16px;
  border-radius: 8px;
  text-decoration: none;
`
