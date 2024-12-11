import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { MenuType } from "../types/commons"

export const syncBothMenus = (userId: string, menuUpdated: MenuType) => {
  const cachette = doc(db, "users", userId)

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  }
  setDoc(cachette, nourriture)
}

export const getMenu = async (idUser: string) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { menu} = docSnapshot.data()
    return menu as MenuType
  }
}
