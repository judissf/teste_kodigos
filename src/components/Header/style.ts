import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 64px;
  background-color: #FBFBFB;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-left: 1rem;

    img {
      width: 124px;
      height: 54px;
    }
  }

  .content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 85px;
    width: 315px;

    .user-name {
      color: #000;
      font-size: 15px;
    }
  }
`