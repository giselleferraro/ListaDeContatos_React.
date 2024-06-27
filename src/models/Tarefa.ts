import * as enums from '../utils/enums/tarefa'

class Tarefa {
  nome: string
  categoria: enums.Categoria
  // status: enums.Status
  // descricao: string
  telefone: string
  email: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    // status: enums.Status,
    // descricao: string,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    // this.status = status
    // this.descricao = descricao
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Tarefa
