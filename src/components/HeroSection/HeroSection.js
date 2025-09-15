import styles from './HeroSection.module.css';
import Button from '@/components/Button/Button';
import { motion } from 'motion/react';
    
export default function HeroSection (props) {
    var { scroll_to } = props;
    var mini_section = [
        {
            head: <h1>45+</h1>,
            tail: "cases"
        },
        {
            head: <h1>20+</h1>,
            tail: "clients"
        },
        {
            head: <h1>1</h1>,
            tail: "company"
        }
    ]
    return (
        <div className={styles.con}>
            <div className={styles.hero_text}>
                <motion.h1
                    initial={{ transform: "translateY(0.4em)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0)", opacity: 1 }}
                >When the Truth Matters, We Deliver</motion.h1>
                <h2>Get clarity and peace of mind with discreet, results-driven investigative services</h2>
                <div className={styles.btn_con}>
                    <Button on_click={scroll_to} value="Reach Out!" />
                </div>
            </div>
            <motion.div className={styles.hero_img}
                initial={{ rotate: 240, opacity: 0, scale: 0.2,}}
                whileInView={{ rotate: 0, opacity: 1, scale: 1, transition: { delay: 0.4 } }}
            >
                <div className={styles.img}></div>
                <h3>Discreet, Professional!</h3>
            </motion.div>
            <div className={styles.extra_text}>
                <ul>
                    {
                        mini_section.map((pair, index) => (
                            <li key={`${index}${pair.head}${pair.tail}`}>
                                <div className={styles.mini_head}>{pair.head}</div>
                                <div className={styles.mini_tail}>{pair.tail}</div>
                            </li>
                        ))

                    }
                </ul>
            </div>
        </div>
    )
}