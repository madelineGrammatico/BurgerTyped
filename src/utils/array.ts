export type ProductType = {
  id: string,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}
export type ProductsType = ProductType[]

export const deepClone = (array: object) => {
  return JSON.parse(JSON.stringify(array))
}

//
export const findObjectById = <T extends {id: string}>(
  id: string,
  array: T[]
): T | undefined => {
  return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (
  idWithUnknowwIndex: string, 
  array: ({id: string} & Record<string, unknown>)[]
) : number | undefined=> {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const removeObjectById = <T extends {id: string}>(
  idOfItemToRemove: string, 
  array: T[]
) : T[] |undefined => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = <T extends {id: string}>(array: T[]) : boolean => {
  return array.length === 0
}

// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)
