export const deepClone = <T>(array: T[]): T[]=> {
  return JSON.parse(JSON.stringify(array))
}

type IdType = string | number
// utilise un type generique qui utilise l'inférence
export const findObjectById = <T extends {id: IdType}>(
  id: IdType,
  array: T[]
): T | undefined => {
  return array.find((itemInArray) => itemInArray.id === id)
}

//sans utiliser de generique et sans inférence avec unknown et Record
// export const findIndexById = (
//   idWithUnknowwIndex: IdType, 
//   array: ({id: IdType} & Record<string, unknown>)[]
// ) : number => {
//   return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
// }
export const findIndexById = <T extends {id: IdType}>(
  idWithUnknowwIndex: IdType, 
  array: T[]
) : number => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const removeObjectById = <T extends {id: IdType}>(
  idOfItemToRemove: IdType, 
  array: T[]
) : T[] => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array: []) : boolean => {
  return array.length === 0
}
