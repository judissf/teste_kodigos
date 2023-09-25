import { IListProductsProps, IProduct } from '../../interfaces'
import { Product } from '../Product'
import { ContentList, HeaderListStyle, ListStyle } from './style'
import { v4 as uuidv4 } from 'uuid';

export const List = ({listProducts, setListWinners}: IListProductsProps) => {
  return (
    <ListStyle>
      <HeaderListStyle>
        <div className='id'>
          <span>Código</span>
        </div>

        <div className='product'>
          <span>Produto</span>
        </div>

        <div className='description'>
          <span>Descrição</span>
        </div>

        <div className='quantity'>
          <span>Quantidade</span>
        </div>

        <div className='supplier'>
          <span>Fornecedor 1</span>
        </div>

        <div className='supplier'>
          <span>Fornecedor 2</span>
        </div>

        <div className='supplier'>
          <span>Fornecedor 3</span>
        </div>
        
        <div className='supplier'>
          <span>Fornecedor 4</span>
        </div>
      </HeaderListStyle>
      <ContentList>
        {listProducts?.products?.map((product: IProduct) => <Product key={uuidv4()} product={product} setListWinners={setListWinners} />)}
      </ContentList>
    </ListStyle>
  )
}
