// Arquivo de estilização do index.tsx.
import styled from 'styled-components'

// type Props = {
//   ativo: boolean
// }
//Nova configuração da props
interface Props {
  ativo: boolean
  onClick?: () => void
  children?: React.ReactNode
}

//Config de estilo do corpo.
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
//Config de estilo da numeração.
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
//Config de estilo de texto.
export const Label = styled.span`
  font-size: 14px;
`
