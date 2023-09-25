import { Background, Content, LoginStyle } from './style'
import logo from '../../assets/logo.png'

export const Login = () => {
  return (
    <LoginStyle>
      <Background>
        <div className='title'>
          <h1>Supply Chain</h1>
          <span>Management</span>
        </div>
      </Background>

      <Content>
        <figure>
          <img src={logo} alt='Logo Kodigos' />
        </figure>

        <form>
          <div className='user'>
            <input id='user' type='text' placeholder='Usuário' required />
            <label htmlFor="user">
              <svg id="baseline-account_circle-24px" xmlns="http://www.w3.org/2000/svg" width="25.542" height="25.542" viewBox="0 0 25.542 25.542">
                <path id="Caminho_3" data-name="Caminho 3" d="M12.642,2A10.642,10.642,0,1,0,23.285,12.642,10.646,10.646,0,0,0,12.642,2Zm0,3.193A3.193,3.193,0,1,1,9.45,8.385,3.188,3.188,0,0,1,12.642,5.193Zm0,15.112a7.663,7.663,0,0,1-6.385-3.427c.032-2.118,4.257-3.278,6.385-3.278S19,14.76,19.028,16.878A7.663,7.663,0,0,1,12.642,20.3Z" transform="translate(0.128 0.128)" fill="#606062"/>
                <path id="Caminho_4" data-name="Caminho 4" d="M0,0H25.542V25.542H0Z" fill="none"/>
              </svg>
            </label>
          </div>

          <div className='password'>
            <input id='password' type='password' placeholder='Senha' required/>
            <label htmlFor='password'>
              <svg id="baseline-lock-24px" xmlns="http://www.w3.org/2000/svg" width="25.542" height="25.542" viewBox="0 0 25.542 25.542">
                <path id="Caminho_1" data-name="Caminho 1" d="M0,0H25.542V25.542H0Z" fill="none"/>
                <path id="Caminho_2" data-name="Caminho 2" d="M18.9,8.45H17.835V6.321a5.321,5.321,0,1,0-10.642,0V8.45H6.128A2.135,2.135,0,0,0,4,10.578V21.221a2.135,2.135,0,0,0,2.128,2.128H18.9a2.135,2.135,0,0,0,2.128-2.128V10.578A2.135,2.135,0,0,0,18.9,8.45Zm-6.385,9.578A2.128,2.128,0,1,1,14.642,15.9,2.135,2.135,0,0,1,12.514,18.028Zm3.3-9.578h-6.6V6.321a3.3,3.3,0,1,1,6.6,0Z" transform="translate(0.257 0.064)" fill="#606062"/>
              </svg>
            </label>
          </div>

          <button type='submit'>Acessar</button>
        </form>
      </Content>
    </LoginStyle>
  )
}
