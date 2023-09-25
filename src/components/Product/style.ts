import styled from 'styled-components'

export const ProductStyle = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 12px 0;
  width: 1170px;
  cursor: pointer;

  &:hover {
    background-color: #f0efeb;
  }

  &::after {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #848688;
  }

  div {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  p {
    color: #000;
    margin: 0;
    overflow: hidden;
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .product-id{
    width: 80px;
  }
  .product-name{
    width: 100px;
    justify-content: flex-start;
  }
  .product-description{
    width: 200px;
    justify-content: flex-start;
  }
  .product-quantity{
    width: 70px;
  }
  .product-supplier{
    width: 180px;
  }
`
