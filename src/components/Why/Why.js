import styles from './Why.module.css';
import { motion } from 'motion/react';

export default function Why () {
    var url2 = '../../../public/value1.jpg';
    
    return (
        <div className={styles.con}>
            <div className={styles.head}>
                <h2>Our Values are Unique</h2>
            </div>
            <div className={styles.body}>
                <div className={styles.sub_body_con}>
                    <div className={styles.sub_body}>
                        <div className={styles.img_and_text}>
                            <div className={styles.sub_img}></div>
                            <div className={styles.sub_sub_text}>
                                <h2>Accurate</h2>
                                <h3>Detail, Precision, Clarity.</h3>
                            </div>
                        </div>
                        <motion.div className={styles.big_picture}
                            initial={{ scale: 0.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                        ></motion.div>
                    </div>
                    <div className={styles.text_upper}>
                        <h3>Every detail matters, and we never miss a step</h3>
                    </div>
                </div>
                <div className={styles.sub_body_con}>
                    <div className={styles.sub_body}>
                        <div className={styles.img_and_text}>
                            <div className={styles.sub_img}></div>
                            <div className={styles.sub_sub_text}>
                                <h2>Timely</h2>
                                <h3>Fast, Reliable, Efficient.</h3>
                            </div>
                        </div>
                        <motion.div className={styles.big_picture}
                            initial={{ scale: 0.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                        ></motion.div>
                    </div>
                    <div className={styles.text_upper}>
                        <h3>Investigations conducted efficiently, without delay.</h3>
                    </div>
                </div>
                <div className={styles.sub_body_con}>
                    <div className={styles.sub_body}>
                        <div className={styles.img_and_text}>
                            <div className={styles.sub_img}></div>
                            <div className={styles.sub_sub_text}>
                                <h2>Confidential</h2>
                                <h3>Private, Trusted, Secure.</h3>
                            </div>
                        </div>
                        <motion.div className={styles.big_picture}
                            initial={{ scale: 0.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                        ></motion.div>
                    </div>
                    <div className={styles.text_upper}>
                        <h3>Discretion guaranteed in every case</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}