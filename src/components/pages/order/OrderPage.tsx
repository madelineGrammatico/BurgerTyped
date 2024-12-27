import { useEffect } from "react"
import styled from "styled-components"
import { theme } from "@/theme/theme" 
//@ts-ignore
import Main from "./Main/Main"
//@ts-ignore
import Navbar from "./Navbar/Navbar"

import { initialiseUserSession } from "./helpers/initialiseUserSession"
import { useOrderContext } from "@/context/OrderContext"
import { useParams } from "react-router-dom"

export default function OrderPage() {
  const context =  useOrderContext()
  const { setBasket, setMenu} = context
    
  const { username } = useParams()

  useEffect(() => {
    if (username) initialiseUserSession(username, setMenu, setBasket)
  }, [username])


  //affichage (render)
  return (
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
