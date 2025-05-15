import { contacts } from "./contactsData";
import styles from "./Footer.module.css";

const ContactInfo = () => (
  <div className={styles.contact}>
    {contacts.map(({ label, content }, index) => (
      <div key={index} className={styles.skyContact}>
        <span className={styles.contactName}>{label}</span>
        <h3 className={styles.header}>{content}</h3>
      </div>
    ))}
  </div>
);

export default ContactInfo;
