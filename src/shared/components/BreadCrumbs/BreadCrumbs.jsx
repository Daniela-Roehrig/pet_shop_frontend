import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.css';

const Breadcrumbs = ({ custom }) => {
    return (
        <nav className={styles.allcrumbs}>
            <Link to="/" className={styles.crumb}>Main Page</Link>
            {custom.map(({ name, to }, index) => {
                const isLast = index === custom.length - 1;

                return (
                    <div key={to || index} className={styles.crumbWrapper}>
                        <span className={styles.spacer} />
                        {isLast ? (
                            <span className={`${styles.crumb} ${styles.crumbHere}`}>{name}</span>
                        ) : (
                            name && <Link to={to} className={styles.crumb}>{name}</Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
