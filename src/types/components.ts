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
    onToggle?: (e: React.ChangeEvent<HTMLInputElement>)=> void,
    labelIfChecked?: string,
    labelIfUnchecked?: string,
  }

//tab
export type TabType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label?: string, 
    className?: string,
    Icon: IconType
} 

//sticker
export type StickerType = {
    label?: string, 
    className?: string,
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
    label?: string, 
    className? : string
}

//logo
export type PropsLogo = { 
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
}

//Header
export type PropsHeader = {children: ReactNode}
// export type PropsHeader = PropsWithChildern

//CasinoEffect 
export type PropsCasinoEffect = { 
    count: string | number, 
    className: string 
}

//Button
export type PropsButton = { 
    label: string, 
    Icon?: ReactNode , 
    className: string, 
    version?: "normal" | "success", 
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    disabled: boolean 
}
export interface ButtonStyledInterface {
    className: string, 
    version: "normal" | "success", 
}
 
// card
export type PropsCard = {
    title: string,
    imageSource: string,
    leftDescription: string,
    hasDeleteButton: boolean,
    onDelete: (e: React.MouseEvent<HTMLElement>) => void,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
    isHoverable: boolean,
    isSelected: boolean,
    onAdd:  (e: React.MouseEvent<HTMLButtonElement>) => void,
    overlapImageSource: string,
    isOverlapImageVisible: boolean,
  }

export interface CardStyledInterface {
    // onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
    isHoverable: boolean,
    isSelected: boolean,
}