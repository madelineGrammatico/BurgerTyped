import { ProductType } from "../types/commons"

export const EMPTY_PRODUCT: Readonly<ProductType> = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
})

export const IMAGE_COMING_SOON = "/images/coming-soon.png"  as const
export const IMAGE_NO_STOCK = "/images/stock-epuise.png" as const

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
} as const
