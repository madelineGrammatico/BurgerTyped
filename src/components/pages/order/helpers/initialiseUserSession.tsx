import { BasketType, MenuType } from "@/types/commons"
import { getMenu } from "../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"

const intialiseMenu = async (
  username: string,
  setMenu:  React.Dispatch<React.SetStateAction<MenuType | undefined>>
) => {
  const menuReceived = await getMenu(username)
  setMenu(menuReceived)
}

const intialiseBasket = (
  username: string,
  setBasket: React.Dispatch<React.SetStateAction<BasketType>>
) => {
  const basketReceived = getLocalStorage(username) // localStorage est synchrone, pas besoin de "await".
  if (basketReceived) setBasket(basketReceived as BasketType)
}

export const initialiseUserSession = async (
  username:string,
  setMenu: React.Dispatch<React.SetStateAction<MenuType | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketType>>
) => {
  await intialiseMenu(username, setMenu)
  intialiseBasket(username, setBasket)
}
