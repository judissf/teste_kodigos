import { useEffect, useState } from 'react'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { List } from '../../components/List'
import { ListWinners } from '../../components/ListWinners'
import { Path } from '../../components/Path'
import { Container, HomeStyle } from './style'
import pdf from '../../assets/pdf.png'
import { IList, IProduct } from '../../interfaces'
import { Send } from '../../components/Send'
import { Disapprove } from '../../components/Disapprove'

export const Home = () => {
  useEffect(() => {
    async function get_database() {
      await fetch(
        'https://my-json-server.typicode.com/judissf/fakeapi-kodigos/db',
        {
          method: 'GET',
        }
      )
        .then((response) =>
          response.json().then((json) => setListProducts(json))
        )
        .catch((error) => console.error(error))
    }

    get_database()
  }, [])

  const [listProducts, setListProducts] = useState<IList>({} as IList)
  const [listWinners, setListWinners] = useState<IProduct[]>([] as IProduct[])
  const [showSend, setShowSend] = useState<boolean>(false)
  const [showApprove, setShowApprove] = useState<boolean>(false)
  const [showDisapprove, setShowDisapprove] = useState<boolean>(false)

  return (
    <>
      <Header />

      <Container>
        <Aside />

        <HomeStyle>
          <Path />

          <h1>Análise de Valores</h1>

          <div className='filter'>
            <div className='id'>
              <label htmlFor=''>Código</label>
              <input type='text' defaultValue={'001'} />
            </div>

            <div className='description'>
              <label htmlFor=''>Descrição</label>
              <input type='text' defaultValue={'Lista de expediente'} />
            </div>

            <div className='type'>
              <label htmlFor=''>Tipo:</label>
              <input type='text' defaultValue={'Material'} />
            </div>
          </div>

          <hr />

          <h2>Editar Valores</h2>

          <p className='description-edit'>
            Informe os valores repassados pelos fornecedores
          </p>

          <List listProducts={listProducts} setListWinners={setListWinners} />

          <hr />

          <h3>Anexos</h3>

          <p className='description-attachment'>Insira as cotações envidas</p>

          <div className='attachment'>
            <div className='header-attachment'>
              <button className='btn-blue'>Adicionar</button>
              <button className='btn-transparent'>Upload</button>
              <button className='btn-cancel'>Cancelar</button>
            </div>
            <div className='content-attachment'>
              <img className='icon-pdf' src={pdf} alt='PDF' />

              <p className='file'>Cotação Fornecedor A.pdf</p>

              <p className='file-size'>14.326KB</p>

              <svg
                id='cancel-24px_1_'
                data-name='cancel-24px (1)'
                xmlns='http://www.w3.org/2000/svg'
                width='24.797'
                height='24.797'
                viewBox='0 0 24.797 24.797'
              >
                <path
                  id='Caminho_2076'
                  data-name='Caminho 2076'
                  d='M0,0H24.8V24.8H0Z'
                  fill='none'
                  opacity='0.87'
                />
                <path
                  id='Caminho_2077'
                  data-name='Caminho 2077'
                  d='M12.332,2A10.332,10.332,0,1,0,22.664,12.332,10.323,10.323,0,0,0,12.332,2Zm0,18.6A8.266,8.266,0,1,1,20.6,12.332,8.277,8.277,0,0,1,12.332,20.6ZM16.041,7.166l-3.709,3.709L8.623,7.166,7.166,8.623l3.709,3.709L7.166,16.041,8.623,17.5l3.709-3.709L16.041,17.5,17.5,16.041l-3.709-3.709L17.5,8.623Z'
                  transform='translate(0.066 0.066)'
                  fill='#189fe3'
                />
              </svg>
            </div>
          </div>

          <hr />

          <h4>Fornecedores selecionados</h4>

          <p className='description-supplier'>
            Vencedores escolhidos por item e análise da última compra
          </p>

          <ListWinners
            listWinners={listWinners}
            setListWinners={setListWinners}
          />

          <hr />

          <div className='btns'>
            <button className='btn-cancel'>Cancelar</button>
            <button className='btn-transparent'>Salvar Rascunho</button>
            <button className='btn-blue' onClick={() => setShowSend(true)}>
              Finalizar
            </button>
          </div>
        </HomeStyle>
      </Container>
      {showSend && (
        <Send
          setShowSend={setShowSend}
          showApprove={showApprove}
          setShowApprove={setShowApprove}
          setShowDisapprove={setShowDisapprove}
        />
      )}
      {showDisapprove && (
        <Disapprove
          setShowDisapprove={setShowDisapprove}
          setShowSend={setShowSend}
        />
      )}
    </>
  )
}
