import React from "react";
import { Backdrop, Button, Card } from "@mui/material";
import styles from './Modal.module.scss'
import { Close } from "@mui/icons-material";

type ModalProps = {
    isOpen: boolean
    children: React.ReactNode
    title?: string
    onCloseAction: () => void
    footerContent?: React.ReactNode
}
export const Modal = ({ isOpen, children, title, footerContent, onCloseAction }: ModalProps) => {

    return(
        <Backdrop sx={{position: 'absolute', width: '100%', height: '100%'}} open={isOpen}>
            <div className={styles.container}>
                <Button
                    className={styles.containerClose}
                    onClick={onCloseAction}
                >
                    <Close/>
                </Button>
                <Card className={styles.containerContent} variant="outlined">
                    { title && <h3> {title} </h3> }
                    { children }
                    {
                        footerContent &&
                        <div className={styles.containerFooter}>
                            { footerContent }
                        </div>
                    }
                </Card>
            </div>
        </Backdrop>
    )
}
