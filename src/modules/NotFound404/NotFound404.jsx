import { Four, NotFoundPets } from '../../shared/Icons/websiteImg/index.jsx'
import Button from '../../shared/components/Button/Button.jsx';
import Section from '../../shared/components/Section/Section.jsx'

import styles from './NotFound404.module.css';

const NotFound404 = () => {
    return (
        <Section>
            <div className={styles.notFoundBox}>
                <div className={styles.img}>
                    <Four />
                    <NotFoundPets />
                    <Four />
                </div>
                <div className={styles.notFoundTextBox}>
                    <h2>Page Not Found</h2>
                    <p className={styles.notFoundText}>We’re sorry, the page you requested could not be found.
                        Please go back to the homepage.</p>
                </div>
                <Button target="/" status="true" position="relative" width="20%" text="Go Home" />
            </div>
        </Section>
    )
}

export default NotFound404;