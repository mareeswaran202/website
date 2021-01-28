import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
function ContactCT(){
    return(
     <div className={styles.contactus_container}>
         <h3>Contact Us</h3>
         <p>Excelgoodies Consulting, Inc.</p>
         <p>5205, Prospect Road, Sanjose</p>
         <p>95129​​</p>
         <h6>Mr.Foster Mathew</h6>
         <p><img src="/images/phone.png" className={styles.top_logo}></img><span>Tel: (210) 209-9222</span></p>
         <p className={"mt-3"}> <img src="/images/texas_top_mail.png" className={styles.top_logo}></img><span>inquiry_oklahoma@excelgoodies.com</span></p>
     </div>
    );
}

export default ContactCT;