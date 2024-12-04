import React from "react"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { PropsHeader } from "../../types/components"

export default function Header({ children }: PropsHeader) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`
