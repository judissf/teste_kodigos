import styled from 'styled-components'

export const Background = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 1280px;
  height: 1542px;
  z-index: 1;
`

export const SendStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  height: 296px;
  background-color: #fff;

  h4 {
    color: #707070;
    font-size: 17px;
    margin-left: 56px;
    font-weight: 500;
  }

  hr {
    width: 96%;
    height: 1px;
    margin: 0 12px;
    background-color: #e4e4e4;
    filter: brightness(1);
    border: none;
  }

  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #707070;
      font-size: 17px;
      font-weight: 600;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 12px;

    button {
      height: 39px;
      width: 122px;
      border-radius: 3px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-exit {
      width: 144px;
      background-color: transparent;
      border: 1px solid #707070;
      color: #707070;
    }

    .btn-disapprove {
      background-color: transparent;
      border: 1px solid #4e9ddd;
      color: #4e9ddd;
    }

    .btn-approve {
      background-color: #189fe3;
      color: #fff;
      border: transparent;
    }
  }
`
