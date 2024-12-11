import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"
import { UserType } from "../types/commons"

export const getUser = async (idUser: string) => {
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived
  }
}

export const createUser = async (userId: string): Promise<UserType> => {
  const docRef = doc(db, "users", userId)

  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.SMALL,
  }

  await setDoc(docRef, newUserToCreate)
  return newUserToCreate as UserType
}

export const authenticateUser = async (userId: string): Promise<UserType> => {
  const existingUser = await getUser(userId)

  if (!existingUser) {
    return await createUser(userId)
  }
  return existingUser as UserType
}
