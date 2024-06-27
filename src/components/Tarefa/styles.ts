import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/tarefa'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  // status?: enums.Status
  parametro: 'categoria'
}

function retornaCorDeFundo(props: TagProps): string {
//   if (props.parametro === 'categoria') {
//     if (props.categoria === enums.Categoria.FAMILIA) return variaveis.vermelho
//     if (props.categoria === enums.Categoria.AMIGOS)
//       return variaveis.amarelo2
//   }
  // else {
  //   if (props.status === enums.Status.PEDENTE) return variaveis.amarelo
  //   if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  // }
  return '#aec48e'
}

// function retornaCorDeFundo(props: TagProps): string {
//   if ('status' in props) {
//     if (props.status === 'Pendente') return variaveis.amarelo
//     if (props.status === 'Concluída') return variaveis.verde
//   } else if ('prioridade' in props) {
//     if (props.prioridade === 'Urgente') return variaveis.vermelho
//     if (props.prioridade === 'Importante') return variaveis.amarelo2
//   }
//   return '#ccc'
// }

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px #d6f1cf;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    aling-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

// export const Descricao = styled.textarea`
//   color: #8b8b8b;
//   font-size: 14px;
//   line-height: 24px;
//   font-family: 'Roboto Mono', monospace;
//   display: block;
//   width: 100%;
//   margin-bottom: 16px;
//   margin-top: 16px;
//   resize: none;
//   border: none;
//   background-color: transparent;
// `

export const Telefone = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #efffe8);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
