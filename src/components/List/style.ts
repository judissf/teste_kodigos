import styled from 'styled-components'

export const ListStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 30px;
  width: 1170px;
  margin-bottom: 12px;
`

export const HeaderListStyle = styled.div`
  display: flex;
  align-items: center;
  width: 1170px;
  height: 42px;
  background-color: #606062;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    font-size: 12px;
    color: #fff;
  }

  .id {
    width: 80px;
  }

  .product {
    width: 100px;
  }

  .description {
    width: 200px;
  }

  .quantity {
    width: 70px;
  }

  .supplier {
    width: 180px;
  }
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 1170px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 370px;
`
