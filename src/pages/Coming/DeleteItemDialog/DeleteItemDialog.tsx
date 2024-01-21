import React from "react";
import {Modal} from "../../../components/Modal/Modal.tsx";
import {Button} from "@mui/material";
import styles from '../Coming.module.scss'
import {Delete} from "@mui/icons-material";

type DeleteItemDialogProps = {
    isOpen: boolean,
    onAccept: () => void
    onCancel: () => void
    productData: {
        photo: string
        title: string
        serialNumber: number
    } | null
}
export const DeleteItemDialog = ({isOpen, onCancel, onAccept, productData}: DeleteItemDialogProps) => {

    return (
        <Modal
            onCloseAction={onCancel}
            isOpen={isOpen} title="Вы уверены, что хотите удалить этот приход?"
            footerContent={<div className={styles.footer}>
                <Button
                    onClick={onCancel}
                    className={styles.footerCancel}
                >
                    Cancel
                </Button>
                <Button
                    startIcon={<Delete/>}
                    className={styles.footerRemove}
                    variant="contained"
                    onClick={onAccept}
                >
                    Remove
                </Button>
            </div>}
        >
            {
                productData && <div className={styles.containerContent}>
					<div className={styles.containerContentDot}/>
					<img alt={`${productData.title} photo`} src={productData.photo}/>
					<div>
                        <h5> {productData.title} </h5>
                        <span> {productData.serialNumber} </span>
					</div>
				</div>
            }
        </Modal>
    )
}
