import { ProductType } from "@/types/commons"

//readonly nesting 
type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};
export const EMPTY_PRODUCT: DeepReadonly<ProductType> = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
})

export const IMAGE_COMING_SOON = "/images/coming-soon.png"  as const
export const IMAGE_NO_STOCK = "/images/stock-epuise.png" as const

export enum BASKET_MESSAGE {
  EMPTY= "Votre commande est vide.",
  LOADING= "Chargement en cours...",
  NOT_AVAILABLE= "Non disponible",
}
