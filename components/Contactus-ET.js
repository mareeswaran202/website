import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
function ContactET(){
    return(
     <div className={styles.contactus_container}>
         <h3>Contact Us</h3>
         <p>Excelgoodies Consulting, Inc.</p>
         <p>575 7th Avenue, 5th Floor, New York City,</p>
         <p>NY 10018​​​​​​​</p>
         <h6>Mr.Paul Melton</h6>
         <p><img src="/images/Phone.png" className={styles.top_logo}></img><span>Tel: (347) 790-1311</span></p>
         <p className={"mt-3"}> <img src="/images/texas_top_mail.png" className={styles.top_logo}></img><span>inquiry_cambridge@excelgoodies.com</span></p>
     </div>
    );
}

export default ContactET;