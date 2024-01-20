import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from './Coming.module.scss'
import {ComingCounter} from "./ComingCounter/ComingCounter.tsx";
import {ComingList} from "./ComingList/ComingList.tsx";
import {Product, useGetOrders, useGetProducts} from "../../utils/hooks/useData.ts";
import {Skeleton} from "@mui/material";

import {gsap, Power1} from "gsap";

export const Coming: React.FC = () => {

    const {products} = useGetProducts()
    const [currentProducts, setCurrentProducts] = useState<Product[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const contentRef = useRef<HTMLDivElement | null>(null)

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
        }, 2000);
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

    return(<div className={styles.container}>
        {isLoading ? (
            <div className="coming-fade-out">
                <Skeleton animation="wave">
                    <ComingCounter number={0} />
                </Skeleton>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
        ) : (
            <div className="coming-fade-in" ref={contentRef}>
                <ComingCounter number={currentProducts ? currentProducts.length : 0} />
                <ComingList productArray={currentProducts || []} />
            </div>
        )}
    </div>)
}
