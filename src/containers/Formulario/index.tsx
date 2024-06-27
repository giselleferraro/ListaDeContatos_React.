import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.AMIGOS)
  // const [descricao, setDescricao] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        categoria,
        // descricao,
        telefone,
        email
        // status: enums.Status.PEDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        {/* <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        /> */}
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          as="textarea"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="Email"
        />
        <Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.AMIGOS}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
