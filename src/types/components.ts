import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from "react"
import { IconType } from "react-icons"

//Reusable-ui
//TextInput 
type TextInputVersion =  "normal" | "minimalist"
export type PropsTextInput = {
    value?: string | number,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    Icon?: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>, 
    className?: string,
    version?: TextInputVersion ,
  } & ComponentPropsWithRef<"input">

  export interface TextInputStyledInterface {
    version: TextInputVersion ,
  }
  
//navBar
export type ToggleButtonType = {
    isChecked: boolean,
    onToggle: ()=> void,
    labelIfChecked: string |"Fermer",
    labelIfUnchecked: string | "Ouvrir",
  }

//tab
export type TabType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label: string, 
    className: string,
    Icon: JSX.Element
} 

//sticker
export type StickerType = {
    label: string, 
    className: string,
} 

//selectInput
export type PropsSelectInput = {
    options: {optionValue: string, label: "Sans pub" | "Avec pub", selected: boolean}[],
    value?: string,
    name: string,
    onChange : React.ChangeEventHandler<HTMLSelectElement>,
    Icon?: ReactNode, 
    className?: string,
  } & ComponentPropsWithoutRef<"select">

  export interface SelectInputStyledInterface {
    value?: string,
}

//ribbon
export type PropsRibbon = { 
    label: string | "new", 
    className : string
}

//logo
export type PropsLogo = { 
    className : string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}

//Header
export type PropsHeader = {children: JSX.Element | string}

//CasinoEffect 
export type PropsCasinoEffect = { 
    count: string | number, 
    className: string 
}

//Button
export type PropsButton = { 
    label: string, 
    Icon: ReactNode , 
    className: string, 
    version?: "normal" | "success", 
    onClick: (e: React.MouseEvent<HTMLButtonElement>), 
    disabled: boolean 
}
export interface ButtonStyledInterface {
    className: string, 
    version: "normal" | "success", 
}