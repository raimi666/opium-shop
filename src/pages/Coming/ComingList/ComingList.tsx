import React from "react";
import styles from './ComingList.module.scss'
import {Product} from "../../../utils/hooks/useData.ts";
import {List} from "@mui/material";
import {ComingListItem} from "./ListItem/ListItem.tsx";

type ComingListType = {
  productArray: Product[]
}
export const ComingList: React.FC<ComingListType> = ({productArray}) => {

  return(<div className={styles.container}>
    <List dense>
      {
        !!productArray.length && productArray.map((el, i) => <ComingListItem key={el.title + i} data={el}/>)
      }
    </List>
  </div>)
}
