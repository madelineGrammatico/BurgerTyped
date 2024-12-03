import React, { ComponentPropsWithRef } from "react"
import styled, { css } from "styled-components"
import { theme } from "../../theme"
import { TextInputStyledInterface } from "../../types/components"
import { IconType } from "react-icons"
// import { PropsTextInput } from "../../types/components"


export type PropsTextInput = {
  value?: string | number,
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
  Icon?: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>, 
  className?: string,
  version?: "normal" | "minimalist",
} & ComponentPropsWithRef<"input">

const TextInput = React.forwardRef<HTMLInputElement, PropsTextInput>(
  ({ onChange,
     Icon, 
     className, 
     version = "normal", 
     ...extraProps 
  } : PropsTextInput , ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        {Icon && <div className="icon"><Icon /></div>}
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    )
  }
)

export default TextInput
const TextInputStyled = styled.div<TextInputStyledInterface>`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }} */

  ${({ version }) => extraStyle[version]}
`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
}
