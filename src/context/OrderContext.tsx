import { createContext, PropsWithChildren, useContext, useRef, useState } from "react"
import { useMenu } from "../hooks/useMenu"
import { useBasket } from "../hooks/useBasket"
import { findObjectById } from "../utils/array"
import { EMPTY_PRODUCT } from "../enums/product"
import { ADMIN_TAB_LABEL, BasketType, MenuType, ProductType } from "../types/commons"

type OrderContextType = {
  isModeAdmin: boolean,
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>,
  isCollapsed: boolean,
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
  currentTabSelected: ADMIN_TAB_LABEL,
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<ADMIN_TAB_LABEL>>,
  menu: MenuType | undefined,
  setMenu: React.Dispatch<React.SetStateAction<MenuType | undefined>>,
  handleAdd: (newProduct: ProductType, username: string) => void,
  handleDelete: (idOfProductToDelete: string, username: string) => void,
  resetMenu:(username: string) => void,
  newProduct: ProductType,
  setNewProduct: React.Dispatch<React.SetStateAction<ProductType>>,
  productSelected : ProductType,
  setProductSelected: React.Dispatch<React.SetStateAction<ProductType>>,
  handleEdit:  (productBeingEdited: ProductType, username: string) => void,
  titleEditRef: React.MutableRefObject<HTMLInputElement | undefined>,
  basket: BasketType,
  setBasket:React.Dispatch<React.SetStateAction<BasketType>>,
  handleAddToBasket: (idProductToAdd: string, username: string) => void,
  handleDeleteBasketProduct:(idBasketProduct: string, username: string) => void,
  handleProductSelected: (idProductClicked: any) => Promise<void>,
}
// 1. Création du context
const OrderContext = createContext<OrderContextType | undefined>(undefined)

// 2. Installation du context
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState<ADMIN_TAB_LABEL>(ADMIN_TAB_LABEL.ADD)
  const [newProduct, setNewProduct] = useState<ProductType>(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState<ProductType>(EMPTY_PRODUCT)
  const titleEditRef = useRef<HTMLInputElement>()
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()

  const handleProductSelected = async (idProductClicked: string) => {
    if (!menu) return
    const productClickedOn = findObjectById(idProductClicked, menu)
    if (!productClickedOn) return
    await setIsCollapsed(false)
    await setCurrentTabSelected(ADMIN_TAB_LABEL.EDIT)
    await setProductSelected(productClickedOn)
    titleEditRef.current?.focus()
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  }

  return <OrderContext.Provider value={orderContextValue}>{children}</OrderContext.Provider>
}

// 3. Consommation du context
export const useOrderContext = () => useContext(OrderContext)
