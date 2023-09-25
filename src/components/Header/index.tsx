import { HeaderStyle } from "./style";
import logo from '../../assets/logo.png'

export const Header = () => (
  <HeaderStyle>
    <figure>
      <img src={logo} alt="Logo Kodigos" />
    </figure>

    <div className="content-header">

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19.5" viewBox="0 0 16 19.5">
        <path id="baseline-notifications-24px" d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z" transform="translate(-4 -2.5)"/>
      </svg>

      <span className="user-name">Administrador</span>

      <svg id="baseline-exit_to_app-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="Caminho_5" data-name="Caminho 5" d="M0,0H24V24H0Z" fill="none"/>
        <path id="Caminho_6" data-name="Caminho 6" d="M10.09,15.59,11.5,17l5-5-5-5L10.09,8.41,12.67,11H3v2h9.67ZM19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z"/>
      </svg>

    </div>
  </HeaderStyle>
)