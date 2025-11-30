import CertifiedServiceSection from "../Pages/CertifiedContact";
import BackgroundSection from "../Pages/ContactBanner";
import ContactInfo from "../Pages/ContactInfo";
import ContactInfoSection from "../Pages/ContactInfoSection";
import Faq from "../Pages/Faq";
import LocationMap from "../Pages/LocationMap";

const Contact = () => {
  return (
    <>
    <BackgroundSection/>
    <LocationMap/>
    <ContactInfoSection/>
    <ContactInfo/>
    <Faq/>
    <CertifiedServiceSection/>
    </>
  )
}

export default Contact