import styles from './About.module.css';
import { motion } from 'motion/react';

export default function () {
    return (
        <div className={styles.abt_con}>
            <div className={styles.abt_head}>
                <h2>About Us</h2>
            </div>
            <div className={styles.abt_body}>
                <div className={styles.abt_big_pics}>
                    <div>
                        <span>Clientele</span>
                        <span>Results</span>
                        <span>expertise</span>
                    </div>
                </div>
                <div className={styles.abt_text}>
                    <motion.h2
                        initial={{ "transform": "translateY(60px)",}}
                        whileInView={{ "transform": "translateY(0px)", }}
                    >We are more than Result</motion.h2>
                    <p>
                        With years of experience in private security and 
                        investigations, we are dedicated to delivering reliable 
                        results with complete discretion. Our licensed team combines 
                        professional expertise, advanced technology, and a 
                        commitment to confidentiality, ensuring every client receives clear answers and peace of mind.
                    </p>
                    <div className={styles.abt_small_pics_con}>

                    </div>
                </div>
            </div>
        </div>
    )
}