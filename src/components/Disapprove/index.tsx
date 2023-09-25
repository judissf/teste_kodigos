import { IDisapproveProps } from "../../interfaces"
import { Background, DisapproveStyle } from "./style"

export const Disapprove = ({setShowDisapprove, setShowSend}: IDisapproveProps) => {
  return (
    <Background>
      <DisapproveStyle>
        <h5>Reprovar</h5>

        <hr />

        <div className="id-description">
          
          <div className="id">
            <label htmlFor="">Código</label>
            <input type="text" defaultValue={'001'} />
          </div>

          <div className="description">
            <label htmlFor="">Descrição</label>
            <input type="text" defaultValue={'Lista de expediente'} />
          </div>
          
        </div>

        <div className="type">
          <label htmlFor="">Tipo:</label>
          <input type="text" defaultValue={'Material'} />
        </div>

        <h6>Justificativa</h6>

        <div className="justify">
          <input type="text" placeholder="Descreva a Justificativa" />
        </div>

        <div className="btns">
          <button className="btn-cancel" onClick={() => {
            setShowSend(true)
            setShowDisapprove(false)
          }}>Cancelar</button>
          <button className="btn-confirm">Confirmar</button>
        </div>
      </DisapproveStyle>
    </Background>
  )
}