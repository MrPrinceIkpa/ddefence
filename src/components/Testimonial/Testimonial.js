'use client'

import styles from './Testimonial.module.css';
import { motion } from 'motion/react';

export default function Testimonial () {
    return (
        <div className={styles.test_con}>
            <div className={styles.test_head}>
                <h2>What Our Clients Say</h2>
            </div>
            <div className={styles.test_body}>            
                <div className={styles.test_card}>
                    <div className={styles.test_pic}>
                        <div>
                            <h3>-Taylor Bam</h3>
                            <h5>C.E.O Horyp Enterprises</h5>
                        </div>
                    </div>
                    <div className={styles.test_text}>
                        <motion.img 
                            initial={{ transform: "rotate(45deg)",}}
                            whileInView={{ transform: "rotate(0deg)", }}
                            transition={{delay: 0.4}}
                        src='/quote.svg' />
                        <p>
                            "
                            The team’s professionalism and discretion 
                            exceeded our expectations. Their investigation 
                            provided critical 
                            insights that helped protect our business interests.
                            "
                        </p>
                    </div>
                </div>
                <div className={styles.test_side_h}>
                    <h2>Work that Speaks for itself</h2>
                </div>
            </div>
        </div>
    )
}