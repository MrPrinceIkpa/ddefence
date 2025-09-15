import styles from './Services.module.css';
import { motion } from 'motion/react';

export default function Services() {
    return (
        <div className={styles.serv_con}>
            <div className={styles.main_head}>
                    <h2>Services</h2>
            </div>
            <div className={styles.serv_head}>
                <div className={styles.top_card_con}>
                    <h2>Focused on Your Answers</h2>
                    <motion.div
                        initial={{ scale: 0.2,}}
                        whileInView={{ scale: 1, }}
                    ></motion.div>
                    <motion.img style={{
                        width: "4vw",
                        height: "auto",
                        position: "absolute",
                        bottom: "20%",
                        left: "10%",
                        zIndex: 100,
                    }} 
                        initial={{ "transform": 'rotate(45deg)',}}
                        whileInView={{ "transform": 'rotate(305deg)',}}
                        transition={{ duration: 3, delay: 0.3}}
                        src="/star.svg" />
                    <img style={{
                        width: "4vw",
                        height: "auto",
                        position: "absolute",
                        bottom: "20%",
                        left: "20%",
                        zIndex: 100,
                    }} src="/star.svg" />
                </div>
            </div>
            <div className={styles.serv_body}>
                <div className={styles.service_card}>
                    <div className={styles.service_card_head}>
                        <h4>Private Security Guards</h4>
                        <img style={{opacity:"0.3"}} src='/arrow.svg' />
                    </div>
                    <div>
                        <p>
                            Professional, licensed guards ensuring 
                            safety, deterring threats, and providing 
                            peace of mind for homes, businesses, and individuals.
                        </p>
                    </div>
                </div>
                <div className={styles.service_card}>
                    <div className={styles.service_card_head}>
                        <h4>Private Investigation</h4>
                        <img style={{opacity:"0.3"}} src='/arrow.svg' />
                    </div>
                    <div>
                        <p>
                            Discreet investigations delivering reliable facts, 
                            uncovering hidden details, and 
                            providing clarity for personal, legal, or business matters.
                        </p>
                    </div>
                </div>
                <div className={styles.service_card}>
                    <div className={styles.service_card_head}>
                        <h4>Electronic Surveillance / Investigation</h4>
                        <img style={{opacity:"0.3"}} src='/arrow.svg' />
                    </div>
                    <div>
                        <p>
                            Advanced technology to discreetly monitor, 
                            track, 
                            and gather accurate evidence while safeguarding your privacy at all times.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}