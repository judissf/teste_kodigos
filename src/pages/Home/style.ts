import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 1478px;
`

export const HomeStyle = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;

  h1 {
    color: #000;
    font-size: 20px;
    margin: 19px 0 19px 72px;
  }

  .filter {
    display: flex;
    align-items: center;
    margin-left: 47px;

    label {
      padding-left: 14px;
      font-size: 14px;
      color: #707070;
    }

    input {
      font-size: 14px;
      height: 13px;
      border: none;
      color: #000;
      padding-left: 5px;

      &:focus {
        outline: none;
      }
    }

    .id {
      display: flex;
      align-items: center;
      border-radius: 6px;
      border: 1px solid #cccccc;
      height: 51px;
      width: 125px;

      input {
        width: 30px;
      }
    }

    .description {
      display: flex;
      align-items: center;
      border-radius: 6px;
      border: 1px solid #cccccc;
      height: 51px;
      width: 246px;
      margin-left: 18px;
    }

    .type {
      display: flex;
      align-items: center;
      border-radius: 6px;
      border: 1px solid #cccccc;
      height: 51px;
      width: 246px;
      margin-left: 18px;
    }
  }

  h2,
  h3,
  h4 {
    color: #707070;
    font-size: 15px;
    font-weight: bold;
    margin: 0 0 8px 56px;
  }

  hr {
    background-color: #e4e4e4;
    width: 1170px;
    margin: 23px 0 20px 25px;
    filter: brightness(1.5);
  }

  .description-edit,
  .description-attachment,
  .description-supplier {
    color: #939393;
    font-size: 12px;
    margin-left: 69px;
    margin-top: 0;
    margin-bottom: 26px;
  }

  .description-attachment {
    margin-bottom: 10.5px;
  }

  .attachment {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    border: 1px solid #cccccc;
    height: 166px;
    width: 1038px;
    margin-left: 53px;

    .header-attachment {
      background-color: #f7f7f7;
      padding: 12px 20px;
      border-radius: 6px 6px 0 0;
      border-bottom: 1px solid #cccccc;
    }

    .content-attachment {
      display: flex;
      align-items: center;
      height: 102px;
      font-size: 1rem;
      color: #939393;

      .icon-pdf {
        width: 45px;
        margin-left: 37px;
      }

      .file {
        margin-left: 68.5px;
      }

      .file-size {
        margin-left: 147.5px;
      }

      #cancel-24px_1_ {
        margin-left: 420px;
        cursor: pointer;
      }
    }
  }

  .btn-cancel {
    background-color: transparent;
    border: 1px solid #707070;
    color: #707070;
  }

  .btn-blue {
    background-color: #189fe3;
    margin-right: 27px;
    color: #fff;
    border: transparent;

    &:active {
      background-color: #1694d2;
    }
  }

  .btn-transparent {
    background-color: transparent;
    margin-right: 24px;
    border: 1px solid #4e9ddd;
    color: #4e9ddd;
  }

  button {
    border-radius: 3px;
    width: 122px;
    height: 39px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }

  .btns {
    position: absolute;
    bottom: 20px;
    right: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;

    button {
      margin: 0;
    }
  }
`
