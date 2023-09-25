import { IListWinnersProps } from '../../interfaces'
import { Product } from '../Product'
import { ContentList, HeaderListStyle, ListStyle } from './style'
import { v4 as uuid } from 'uuid'

export const ListWinners = ({listWinners, setListWinners}: IListWinnersProps) => {
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
        {listWinners?.map((product) => <Product key={uuid()} product={product} setListWinners={setListWinners} />)}
      </ContentList>
    </ListStyle>
  )
}
