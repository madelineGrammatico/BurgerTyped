import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import EditForm from "./AdminPanel/EditForm/EditForm"
import HintMessage from "./AdminPanel/EditForm/HintMessage"
import AddForm from "./AdminPanel/AddForm/AddForm"
import { ADMIN_TAB_LABEL } from "@/types/commons"

export const getTabsConfig = (hasAlreadyBeenClicked: boolean) => [
  {
    index: ADMIN_TAB_LABEL.ADD,
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: ADMIN_TAB_LABEL.EDIT,
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
]

type TabConfigType = {
  index: ADMIN_TAB_LABEL,
  label: string,
  Icon: JSX.Element,
  Content: JSX.Element
}

export const getTabSelected = (tabs: TabConfigType[], currentTabSelected: ADMIN_TAB_LABEL) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}
