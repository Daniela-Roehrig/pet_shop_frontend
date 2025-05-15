
import styles from './Discounter.module.css'

const Discounter = ({ price, discont_price, position, right, top, height }) => {
    const percents = Math.round(((price - discont_price) / price) * 100);
    return (
        <div className={styles.saleBox} style={{position, right, top, height}}>
            <p className={styles.saler}>-{percents}%</p>
        </div>
    )
}
export default Discounter;