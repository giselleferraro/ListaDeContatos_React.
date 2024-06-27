import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'

type Props = {
  mostarFiltros: boolean
}

const BarraLateral = ({ mostarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              {/* <FiltroCard
                valor={enums.Status.PEDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="Concluídas"
              /> */}
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Categoria.AMIGOS}
                criterio="categoria"
                legenda="Amigos"
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="Trabalho"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
