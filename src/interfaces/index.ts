export interface IProduct {
  id: number
  name: string
  description: string
  qtd: number
  prodCompany: IProdCompany[]
}

export interface ICompany {
  id: number
  name: string
}

export interface IProdCompany {
  id: number
  idCompany: number
  value: number
}

export interface IList {
  products: IProduct[]
  companies: ICompany[]
}

export interface IProductProps {
  product: IProduct
  setListWinners: React.Dispatch<React.SetStateAction<IProduct[]>>
  
}

export interface IListProductsProps {
  listProducts: {
    products: IProduct[]
    companies: ICompany[]
  }
  setListWinners: React.Dispatch<React.SetStateAction<IProduct[]>>
  
}

export interface IListWinners {
  products: IProduct[]
}

export interface IListWinnersProps {
  listWinners: IProduct[]
  setListWinners: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export interface ISendProps {
  setShowSend: React.Dispatch<React.SetStateAction<boolean>>
  setShowDisapprove: React.Dispatch<React.SetStateAction<boolean>>
  setShowApprove: React.Dispatch<React.SetStateAction<boolean>>
  showApprove: boolean
}

export interface IApproveProps {
  setShowApprove: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IDisapproveProps {
  setShowSend: React.Dispatch<React.SetStateAction<boolean>>
  setShowDisapprove: React.Dispatch<React.SetStateAction<boolean>>
}