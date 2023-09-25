import { ISendProps } from '../../interfaces'
import { Approve } from '../Approve'
import { Background, SendStyle } from './style'

export const Send = ({
  setShowSend,
  showApprove,
  setShowApprove,
  setShowDisapprove,
}: ISendProps) => {
  return (
    <Background>
      <SendStyle>
        <h4>Enviar cotação</h4>

        <hr />

        <div className='content'>
          <p>Deseja enviar agora como pedido para o Protheus?</p>
        </div>

        <div className='btns'>
          <button className='btn-exit' onClick={() => setShowSend(false)}>
            Retornar a edição
          </button>
          <button
            className='btn-disapprove'
            onClick={() => {
              setShowDisapprove(true)
              setShowApprove(false)
            }}
          >
            Reprovar
          </button>
          <button className='btn-approve' onClick={() => setShowApprove(true)}>
            Aprovar
          </button>
        </div>
      </SendStyle>
      {showApprove && <Approve setShowApprove={setShowApprove} />}
    </Background>
  )
}
