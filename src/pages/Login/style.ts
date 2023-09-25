import styled from 'styled-components'
import background from '../../assets/40326.png'

export const LoginStyle = styled.main`
  display: flex;
  width: 1280px;
  height: 800px;
`

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 666px;
  background-repeat: no-repeat;
  background-position: right 20% bottom 65%;
  background-image: url(${background}),
    linear-gradient(165deg, #6f6f6f 5%, #11111d 70%);

  .title {
    display: flex;
    position: relative;

    h1 {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      text-shadow: 0px 3px 6px #00000029;
      font-size: 58px;
    }

    span {
      position: absolute;
      bottom: -40px;
      right: -50px;
      font: italic normal normal 63px Brush Script MT;
      color: #3395f7;
      text-shadow: 0px 3px 6px #00000029;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 614px;
  background-color: #fff;

  figure {
    margin-top: 110px;
    margin-bottom: 56px;

    img {
      width: 375px;
      height: 163px;
      aspect-ratio: 0.5;
    }
  }

  form {
    .user,
    .password {
      display: flex;
      width: 281px;
      height: 51px;
      border: 1px solid #cccccc;
      border-radius: 6px;

      label {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      input {
        width: 80%;
        height: 100%;
        background-color: #fff;
        border: none;
        outline: none;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        padding: 0 0 0 1rem;
        border-radius: 6px;

        &::placeholder {
          color: #989898;
        }
      }
    }

    .user {
      margin-bottom: 8px;
    }

    .password {
      margin-bottom: 38px;
    }

    button {
      background-color: #189fe3;
      width: 281px;
      height: 51px;
      border-radius: 7px;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border: transparent;
      cursor: pointer;

      &:active {
        background-color: #1694d2;
      }
    }
  }
`
