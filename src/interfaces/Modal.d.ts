import {ReactNode} from "react";

export interface ModalProps {
    isOpen: boolean,
    modalTitle?: string
    saveButton?: string
    children: ReactNode,
    onSave?: () => void,
    onClose: () => void
}