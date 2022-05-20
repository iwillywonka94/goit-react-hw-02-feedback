import ProtoTypes from 'prop-types'
import styles from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percent}) => {
    console.log(good)
    return (
        <div className={styles.statistics}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p>
                        Good: <span className={styles.value}>{good}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Neutral: <span className={styles.value}>{neutral}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Bad: <span className={styles.value}>{bad}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Total: <span className={styles.value}>{total}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Positive feedback: <span className={styles.value}>{percent}%</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    
}

export default Statistics;