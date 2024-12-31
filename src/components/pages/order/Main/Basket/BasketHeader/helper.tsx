import { BasketType, MenuType } from "@/types/commons"
import { findObjectById } from "@/utils/array"
import { convertStringToBoolean } from "@/utils/string"

export const calculateSumToPay = (basket: BasketType, menu: MenuType) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu)
    if (!menuProduct) return total
    if (isNaN(menuProduct.price)) return total
    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total
    total += menuProduct.price * basketProduct.quantity
    return total
  }, 0)
}
