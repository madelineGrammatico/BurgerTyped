export type BasketProductType ={
    id: string,
    quantity: number,
}
export type BasketType = BasketProductType[]

export type ProductType = {
    id: string,
    imageSource: string,
    title: string,
    price: number,
    quantity?: number,
    isAvailable: boolean,
    isPublicised: boolean,
}
export type MenuType = ProductType[]

export type ProducBasketWithDataType = 
    BasketProductType 
    & Omit<ProductType, "isAvailable" | "isPublicised"> 
    & Partial<Pick<ProductType, "isAvailable" | "isPublicised">>

export type UserType = {
    username:  string, 
    menu: MenuType
}

export enum ADMIN_TAB_LABEL {
    EDIT = "edit",
    ADD = "add",
    CHEVRON = "chevron",
  }
  