import { IApproveProps } from '../../interfaces'
import { ApproveStyle } from './style'

export const Approve = ({ setShowApprove }: IApproveProps) => {
  return (
    <ApproveStyle>
      <div className='content'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
          <g fill="#53a77f" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M20.29297,5.29297l-11.29297,11.29297l-4.29297,-4.29297l-1.41406,1.41406l5.70703,5.70703l12.70703,-12.70703z"></path></g></g>
        </svg>

        <p>Criado Pedido para o Protheus!</p>
      </div>

      <button onClick={() => setShowApprove(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
          <g fill="#53A77F" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
        </svg>
      </button>
    </ApproveStyle>
  )
}
