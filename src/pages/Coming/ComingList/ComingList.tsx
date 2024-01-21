import React, {SetStateAction, useCallback} from "react";
import styles from './ComingList.module.scss'
import {Product} from "../../../utils/hooks/useData.ts";
import {List} from "@mui/material";
import {ComingListItem} from "./ListItem/ListItem.tsx";

type ComingListType = {
  productArray: Product[]
  productOnRemove: React.Dispatch<SetStateAction<Product | null>>
}
export const ComingList: React.FC<ComingListType> = ({productArray, productOnRemove}) => {

  const memoizedProductOnRemove = useCallback(
      (product: Product) => {
        productOnRemove(product);
      },
      [productOnRemove]
  );

  return(<div className={styles.container}>
    <List dense>
      {
        !!productArray.length && productArray.map((el, i) => <ComingListItem onRemoveItem={memoizedProductOnRemove} key={el.title + i} data={el}/>)
      }
    </List>
  </div>)
}
