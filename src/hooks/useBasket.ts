import { useState } from "react"
import { deepClone, findObjectById, findIndexById, removeObjectById } from "../utils/array"
import { setLocalStorage } from "@/utils/window"
import { BasketType } from "@/types/commons"

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketType>([])
  console.log("basket", basket)
  const handleAddToBasket = (idProductToAdd: string, username: string) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd: string, basketCopy: BasketType, username: string) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    if (!indexOfBasketProductToIncrement) return
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd: string, basketCopy: BasketType, setBasket: React.Dispatch<React.SetStateAction<BasketType>>, username: string) => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
    setLocalStorage(username, newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct: string, username: string) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct }
}
