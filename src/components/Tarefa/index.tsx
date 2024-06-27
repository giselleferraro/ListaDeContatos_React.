import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/tarefa'

type Props = TarefaClass

const Tarefa = ({
  // descricao: descricaoOriginal,
  categoria,
  nome,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  // const [descricao, setDescricao] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  // useEffect(() => {
  //   if (descricaoOriginal.length > 0) {
  //     setDescricao(descricaoOriginal)
  //   }
  // }, [descricaoOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    // setDescricao(descricaoOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  // function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
  //   dispatch(
  //     alteraStatus({
  //       id,
  //       finalizado: evento.target.checked
  //     })
  //   )
  // }

  return (
    <S.Card>
      <label htmlFor={nome}>
        {/* <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        /> */}
        <S.Titulo>
          {estaEditando && <em>Editando... </em>}
          {nome}
        </S.Titulo>
      </label>
      {/* <S.Tag parametro="categoria"categoria={categoria}> */}
      <S.Tag parametro="categoria">
        {categoria}
      </S.Tag>
      {/* <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag> */}
      {/* <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      /> */}
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    // descricao,
                    categoria,
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa

//{condicao ? tratramento verdadeiro : excecao}
// é a mesma coisa de:
// if (condicao) {
//   tratamento verdadeiro
// } else {
//   excecao
// }

// exemplo:
// {idade >= 18 ? 'é maior de idade' : 'é menor de idade'}
