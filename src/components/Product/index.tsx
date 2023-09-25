import { IProductProps } from '../../interfaces'
import { ProductStyle } from './style'
import { v4 as uuid } from 'uuid'

export const Product = ({ product, setListWinners }: IProductProps) => {
  
  return (
    <ProductStyle
      onClick={() => {
          setListWinners(prevState => [...prevState, product]);
      }}
    >
      <div className='product-id'>
        <p>{product.id.toString().padStart(3, '0')}</p>
      </div>

      <div className='product-name'>
        <p>{product.name}</p>
      </div>

      <div className='product-description'>
        <p>{product.description}</p>
      </div>

      <div className='product-quantity'>
        <p>{product.qtd}</p>
      </div>

      {product.prodCompany.map((company) => (
        <div key={uuid()} className='product-supplier'>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(company.value)}
          </p>
        </div>
      ))}
    </ProductStyle>
  )
}
