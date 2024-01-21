import React, {SetStateAction, useEffect, useRef} from "react";
import {Product} from "../../../../utils/hooks/useData.ts";
import {ListItem, IconButton, ListItemText, Button} from "@mui/material";
import {Delete, FormatListBulleted} from "@mui/icons-material";

import {gsap} from "gsap";

import styles from './ListItem.module.scss'
import * as classNames from "classnames";
import moment from "moment";

type ListItemProps = {
    data: Product;
    onRemoveItem: (p: Product) => void
}
export const ComingListItem: React.FC<ListItemProps> = ({data, onRemoveItem}) => {


    return(
        <ListItem
            className={styles.container}
            sx={{width: '100%'}}
            secondaryAction={
                <IconButton
                    sx={{marginRight: '.4rem', padding: '.1rem'}} edge="end" aria-label="delete"
                    onClick={() => onRemoveItem(data)}
                >
                    <Delete/>
                </IconButton>
            }
        >
            <div className={styles.containerContent}>
                <div className={styles.containerContentTitle}>
                    {data.title}
                </div>
                <Button aria-label="edit">
                    <FormatListBulleted/>
                </Button>
                <div className={classNames(styles.containerContentData, styles.flexReverse)}>
                    <span className="list__content-main"> Продуктa </span>
                    <span style={{fontSize: '1.1rem'}} className="list__content-secondary"> {data.order} </span>
                </div>
                <div className={`${styles.containerContentDataCentered} ${styles.containerContentSecondary}`}>
                    <span className={`${styles.containerContentSecondary}`}>
                        { moment(data.guarantee.start).format('DD/MM').toString() }
                    </span>
                    <span className={`${styles.containerContentMain}`}>
                        { moment(data.guarantee.end).format('DD/MM/YYYY').toString() }
                    </span>
                </div>
                <div className={styles.containerContentData}>
                    <span className={styles.containerContentSecondary}> {data.price[0].value} {data.price[0].symbol} </span>
                    <span className={styles.containerContentMain}> {data.price[1].value} {data.price[0].symbol} </span>
                </div>
            </div>
        </ListItem>
    )
}
