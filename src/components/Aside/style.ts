import styled from "styled-components";

export const AsideStyle = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66px;
  height: 100%;
  background-color: #606062;
  
  #baseline-home-24px {
    margin-top: 36px;
  }

  svg {
    margin-bottom: 39px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0);
    }
  }
`