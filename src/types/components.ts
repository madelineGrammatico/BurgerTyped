import { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from "react"
import { ADMIN_TAB_LABEL } from "./commons"

//Reusable-ui
//TextInput 
type TextInputVersion =  "normal" | "minimalist"
export type PropsTextInput = {
    Icon?: ReactNode, 
    version?: TextInputVersion ,
  } & ComponentPropsWithRef<"input">

  export interface TextInputStyledInterface {
    version: TextInputVersion ,
  }
  
//navBar
export type ToggleButtonType = {
    isChecked: boolean,
    onToggle?: (e: React.ChangeEvent<HTMLInputElement>)=> void,
    labelIfChecked?: string,
    labelIfUnchecked?: string,
  }

//tab
export type TabType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label?: string, 
    index: ADMIN_TAB_LABEL | "chevron",
    className?: string,
    Icon: JSX.Element
} 

//sticker
export type StickerType = {
    label?: string, 
    className?: string,
} 

//selectInput
type Option = {
    optionValue?: string | readonly string[] | number | undefined, 
    label: string,
}
export type PropsSelectInput = {
    options: Option[],
    Icon?: JSX.Element,
} & ComponentPropsWithoutRef<"select">

  export interface SelectInputStyledInterface {
    value?: string,
}

//ribbon
export type PropsRibbon = { 
    label?: string, 
    className? : string
}

//logo
export type PropsLogo = { 
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
}

//Header,
export type PropsHeader = {children: ReactNode}
// export type PropsHeader = PropsWithChildern

//CasinoEffect 
export type PropsCasinoEffect = { 
    count: string, 
    className?: string 
}

//Button
type ButtonVersion = "normal" | "success"
export type PropsButton = { 
    label: string, 
    Icon?: JSX.Element ,
    version?: ButtonVersion,
} & ComponentProps<"button">

export interface ButtonStyledInterface {
    className: string, 
    version: ButtonVersion, 
}
 
// card
export type PropsCard = {
    title?: string,
    imageSource?: string,
    leftDescription?: string,
    hasDeleteButton?: boolean,
    onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
    isHoverable?: boolean,
    isSelected?: boolean,
    onAdd?:  (e: React.MouseEvent<HTMLButtonElement>) => void,
    overlapImageSource?: string,
    isOverlapImageVisible?: boolean,
  }

export interface CardStyledInterface {
    isHoverable?: boolean,
    isSelected?: boolean,
}