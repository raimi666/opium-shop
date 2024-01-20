import React from "react";
import styles from './ComingCounter.module.scss'
import {AddButton} from "../../../components/AddButton/AddButton.tsx";
import {useTranslation} from "react-i18next";
import {capitalizeFirstLetter} from "../../../utils/stringEditors.ts";

type ComingCounterPropsType = {
    number: number
}
export const ComingCounter = ({number}: ComingCounterPropsType) => {

    const {t} = useTranslation()

    return (<div className={styles.container}>
        <AddButton
            size={36}
            onClick={() => {
                console.log('clicked')
            }}>
            +
        </AddButton>
        <div className={styles.containerData}>
            <span>
                {
                    capitalizeFirstLetter(t('navigation.coming'))
                }
            </span>
            /
            <span>
                {number}
            </span>
        </div>
    </div>)
}
