import React, {createRef, RefObject, useEffect, useRef, useState} from "react";
import styles from './AddButton.module.scss';
import {Button} from "@mui/material";

import {gsap} from "gsap";

type Timeline = ReturnType<typeof gsap.timeline>
type AddButtonType = {
    onClick: () => void
    size: number
    children: React.ReactNode
}
export const AddButton: React.FC<AddButtonType> = ({onClick, size, children}) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)
    const refButton = useRef<null | HTMLButtonElement>(null)
    const buttonAnimationTimelineRef = useRef<null | Timeline>(null);

    useEffect(() => {
        if (refButton.current) {

            const buttonChild = refButton.current.children[0];

            buttonAnimationTimelineRef.current = gsap.timeline({
                delay: 0.2,
                repeat: 0,
                paused: true,
                autoRemoveChildren: false
            })

                .to(buttonChild, {
                    boxShadow: 'inset 0px 0px 5px 0px rgba(0,0,0,0.75)',
                    duration: 0.1
                })
                .to(buttonChild, {
                    boxShadow: 'inset 0px 0px 12px 0px rgba(0,0,0,0.75)',
                    duration: 0.1
                })

            !isHovered && buttonAnimationTimelineRef.current.to(buttonChild, {
                boxShadow: isHovered ? 'inset 0px 0px 2px 0px rgba(0,0,0,0.75)' : 'inset 0px 0px 5px 0px rgba(0,0,0,0.75)',
                duration: 0.1,
            });

        }
    }, [refButton, isHovered]);

    useEffect(() => {
        if (refButton.current && refButton.current.children.length) {
            refButton.current.children[0].style.boxShadow = isHovered ? 'inset 0px 0px 5px 0px rgba(0,0,0,0.75)' : 'unset';
        }

    }, [isHovered])

    const onClickHandler = () => {

        onClick()

        if (buttonAnimationTimelineRef.current) {
            buttonAnimationTimelineRef.current?.restart();
        }

    }

    return (<Button ref={refButton} className={styles.container} sx={{minWidth: size, minHeight: size, height: size, width: size}}
                    onClick={onClickHandler}>
        <div
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
            style={{background: isHovered ? '#439f1c' : '#5bb433'}}
            className={styles.containerContent}
        >
            <p>
                {children}
            </p>
        </div>
    </Button>)
}
