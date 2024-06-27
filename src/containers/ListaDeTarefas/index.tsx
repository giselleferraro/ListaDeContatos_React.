import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'categoria') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.categoria === valor
        )
      }
      // else if (criterio === 'status') {
      //   tarefasFiltradas = tarefasFiltradas.filter(
      //     (item) => item.status === valor
      //   )
      // }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) marcada(s) como  ${`${criterio}: ${valor}`}${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              // descricao={t.descricao}
              telefone={t.telefone}
              email={t.email}
              categoria={t.categoria}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
