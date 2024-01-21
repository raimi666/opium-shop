import React from "react";
import styles from './ContentWrapper.module.scss'

export const ContentWrapper = ({ children }: {children: React.ReactNode}) => {
  return(
      <div className={styles.wrapper}>
          { children }
      </div>
  )
}
