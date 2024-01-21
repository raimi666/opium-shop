import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from './Coming.module.scss'
import {ComingCounter} from "./ComingCounter/ComingCounter.tsx";
import {ComingList} from "./ComingList/ComingList.tsx";
import {Product, useGetProducts} from "../../utils/hooks/useData.ts";
import {Skeleton} from "@mui/material";

import {gsap, Power1} from "gsap";
import {DeleteItemDialog} from "./DeleteItemDialog/DeleteItemDialog.tsx";
import {ContentWrapper} from "../../components/ContentWrapper/ContentWrapper.tsx";

export const Coming: React.FC = () => {

    const {products} = useGetProducts()
    const [currentProducts, setCurrentProducts] = useState<Product[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);

    const [itemForRemove, setItemForRemove] = useState<Product | null>(null)

    const contentRef = useRef<HTMLDivElement | null>(null);

    const removeProduct = () => {
        if(currentProducts && itemForRemove) {
            setCurrentProducts(currentProducts.filter((el) => {
                return el.id != itemForRemove.id
            }))
            setItemForRemove(null)
        }
    }

    const onCancel = () => {
        setItemForRemove(null)
    }


    useEffect(() => {
        setTimeout(() => {
            gsap.to(".coming-fade-out", {
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                    setCurrentProducts(products);
                    setIsLoading(false);
                },
            });
        }, 500);
    }, [products])

    useLayoutEffect(() => {
        if (contentRef.current && currentProducts) {
            gsap.to(contentRef.current, {
                duration: 0.5,
                opacity: 1,
                stagger: 0.1,
                ease: "power1.out",
            });
        }
    }, [currentProducts, contentRef.current]);

    return(
        <div style={{width: '100%'}}>
            <ContentWrapper>
                <div className={styles.container}>
                    {
                        isLoading ? (
                            <div className="coming-fade-out">
                                <Skeleton animation="wave">
                                    <ComingCounter number={0} />
                                </Skeleton>
                                {
                                    Array.from({ length: 3 })
                                        .map((_, i) => <Skeleton key={`skeleton-${i}`} animation="wave" />)
                                }
                            </div>
                        ) : (
                            <div style={{width: '100%'}} className="coming-fade-in" ref={contentRef}>
                                <ComingCounter number={currentProducts ? currentProducts.length : 0} />
                                <ComingList productOnRemove={setItemForRemove} productArray={currentProducts || []} />
                            </div>
                        )}
                </div>
            </ContentWrapper>
            <DeleteItemDialog
                productData={itemForRemove ? { ...itemForRemove } : null}
                onCancel={onCancel}
                onAccept={removeProduct}
                isOpen={!!itemForRemove}
            />
        </div>
    )
}
