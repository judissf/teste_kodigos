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

export const DisapproveStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #707070;
  background-color: #fff;
  width: 535px;
  height: 389px;

  h5 {
    color: #707070;
    font-weight: 500;
    font-size: 20px;
    margin: 30px 0 15px 30px;
  }

  hr {
    width: 93%;
    height: 1px;
    margin: 0 12px;
    background-color: #e4e4e4;
    filter: brightness(1);
    border: none;
  }

  .id-description {
    display: flex;
    align-items: center;
    margin: 26.5px 0 11.5px 23px;

    .id {
      display: flex;
      align-items: center;
      border-radius: 6px;
      border: 1px solid #cccccc;
      width: 93px;
      height: 38px;

      input {
        width: 36px;
      }
    }

    .description {
      display: flex;
      align-items: center;
      border-radius: 6px;
      border: 1px solid #cccccc;
      margin-left: 14px;
      height: 38px;
      width: 378px;
    }
  }

  .type {
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #cccccc;
    margin-left: 23px;
    height: 38px;
    width: 182px;
    margin-bottom: 19px;
  }

  label {
    padding-left: 14px;
    font-size: 11px;
    color: #707070;
  }

  input {
    font-size: 11px;
    height: 13px;
    border: none;
    color: #000;
    padding-left: 5px;

    &:focus {
      outline: none;
    }
  }

  h6 {
    color: #707070;
    font-size: 14px;
    margin: 0 0 13.5px 23px;
    font-weight: 400;
  }

  .justify {
    display: flex;
    align-items: center;
    width: 486px;
    height: 38px;
    border: 1px solid #cccccc;
    border-radius: 6px;
    margin-left: 23px;

    input {
      width: 98%;
      color: #000;
      font-size: 12px;
      padding-left: 22px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #707070;
      }
    }
  }

  .btns {
    position: absolute;
    bottom: 48px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;

    button {
      border-radius: 3px;
      cursor: pointer;
      width: 122px;
      height: 39px;
    }

    .btn-confirm {
      background-color: #189fe3;
      color: #fff;
      border: transparent;
    }

    .btn-cancel {
      background-color: transparent;
      border: 1px solid #707070;
      color: #707070;
    }
  }
`
