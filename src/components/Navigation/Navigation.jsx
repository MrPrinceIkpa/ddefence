'use client'

import styles from './Navigation.module.css';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { animate } from 'motion';

export default function Navigation (props) {
    var { textAndOnclick } = props;
    //textAndOnclick is  an array of arrays [0:txt, 1:onclick]
    var line1 = useRef();
    var line2 = useRef();
    var line3 = useRef();
    var burgerCon = useRef();
    var mobileList = useRef();
    var [isMobile, setIsMobile] = useState(false);

    const toggleIsMobile = function () {
        setIsMobile(!isMobile);
    }

    const handleBurger = function (e) {
        e.preventDefault();
        if(isMobile) {
            animateToOpen();
        }
        else {
            animateToClose();
        }
        toggleIsMobile();
    }

    const animateToClose = function () {
        line2.current.style.opacity="0";
        line1.current.style.position="absolute";

        animate (line1.current, {
            rotate: 45,
            "top": "40%"
        })
        animate (line3.current, {
            rotate: -45,
        })
        return
    }
    const animateToOpen = function () {
        line1.current.style.position="relative";
        animate (line1.current, {
            rotate: 0,
            top: 0
        })
        animate (line3.current, {
            rotate: 0,
        })
        setTimeout(function () {
            line2.current.style.opacity="1";
        }, 220)
        return
    }


    return (
        <nav>
            <div className={styles.con}>
                <div className={styles.logo_con}>
                    <img className={styles.logo} src="/DD.png" />
                </div>
                <div className={styles.others_con}>
                    <ul className={styles.nav_list_wrapper}>
                        {
                            textAndOnclick.map((arr, indx) => (
                                <li onClick={arr[1]} key={`${arr[0]}${indx}`}>{arr[0]}</li>
                            ))   
                        }
                    </ul>
                    <div
                        ref={burgerCon}
                        className={styles.hamburger}
                        onClick={handleBurger}
                    >
                        <span ref={line1} className={styles.line}></span>
                        <span ref={line2} className={styles.line}></span>
                        <span ref={line3} className={styles.line}></span>
                    </div>
                </div>
                {
                isMobile ?  
                    <ul ref={mobileList} className={styles.mobileNavList}>
                        {
                            textAndOnclick.map((arr, indx) => (
                                <li onClick={(e)=>{handleBurger(e);arr[1]()}} key={`${arr[0]}${indx}`}>{arr[0]}</li>
                            ))   
                        }
                    </ul> : <></>}

            </div>
        </nav>
    )
}