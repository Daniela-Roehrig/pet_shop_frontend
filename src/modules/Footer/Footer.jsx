import Section from "../../shared/components/Section/Section";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";

const Footer = () => (
  <Section>
    <h2>Contact</h2>
    <div>
      <ContactInfo />
      <GoogleMap />
    </div>
  </Section>
);

export default Footer;
