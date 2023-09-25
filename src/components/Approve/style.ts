import styled from 'styled-components'

export const ApproveStyle = styled.div`
  position: absolute;
  top: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border-left: 6px solid #53a77f;
  background-color: #e8f7f0;
  width: 1000px;
  height: 86px;
  z-index: 2;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    height: 100%;

    svg {
      width: 40px;
      margin-left: 34px;
    }

    p {
      width: max-content;
      color: #53a77f;
      font-weight: 300;
    }
  }

  button {
    background-color: transparent;
    border: none;
    height: 22px;
    cursor: pointer;
    margin-right: 28px;
    padding: 0;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`
