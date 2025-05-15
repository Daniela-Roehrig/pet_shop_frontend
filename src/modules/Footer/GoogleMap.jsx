import styles from "./Footer.module.css";

const GoogleMap = () => (
  <div className={styles.mapContainer}>
    <iframe
      title="Google Map of Wallstraße 9–13"
      src="https://www.google.com/maps?q=Wallstraße+9-13,+10179+Berlin&output=embed"
      width="100%"
      height="350"
      allowFullScreen=""
      loading="lazy"
      style={{ border: 0 }}
    />
  </div>
);

export default GoogleMap;
