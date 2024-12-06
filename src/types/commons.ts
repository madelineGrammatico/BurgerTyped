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
    quantity: number,
    isAvailable: boolean,
    isPublicised: boolean,
}
export type MenuType = ProductType[]