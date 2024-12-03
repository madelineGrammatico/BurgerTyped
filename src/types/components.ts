import { ComponentPropsWithRef } from "react"
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