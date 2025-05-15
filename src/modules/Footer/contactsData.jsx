
import Instagram from '../../shared/Icons/footerImg/instagram.svg';
import Whatsapp from '../../shared/Icons/footerImg/whatsapp.svg';
import styles from './Footer.module.css'


export const contacts = [
  {
    label: "Phone",
    content: <a className={styles.phone}  href="tel:+493091588492">+49 30 915-88492</a>,
  },
  {
    label: "Socials",
    content: (
      <div className={styles.sozialBox}>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank">
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
    ),
  },
  {
    label: "Adress",
    content: "Wallstraße 9-13, 10179 Berlin, Deutschland",
  },
  {
    label: "Working Hours",
    content: "24 hours a day",
  },
];
