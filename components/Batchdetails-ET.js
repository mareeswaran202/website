import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faCalendarAlt, faLaptopCode, faDollarSign, faTasks} from '@fortawesome/free-solid-svg-icons';
function ETbatchdetails(){
    return(
        <div className={styles.crs_fee}>
        <div className={styles.courseoverview_main}>
           <div className={styles.courseoverview_icon}>
           <FontAwesomeIcon icon={faCalendarAlt} />
           </div>
           <div className={styles.courseoverview_detail}>
             <span className={styles.spn1}>Batch Starts On</span>
             <span className={styles.spn2}>Tuesday, 16 Febraury</span>
           </div>
        </div>
        <div className={styles.courseoverview_main}>
           <div className={styles.courseoverview_icon}>
           <FontAwesomeIcon icon={faTasks} />
           </div>
           <div className={styles.courseoverview_detail}>
             <span className={styles.spn1}>Pre-requisite</span>
             <span className={styles.spn2}>Good knowledge on Excel Formulas</span>
           </div>
        </div>
        <div className={styles.courseoverview_main}>
           <div className={styles.courseoverview_icon}>
           <FontAwesomeIcon icon={faLaptopCode} />
           </div>
           <div className={styles.courseoverview_detail}>
             <span className={styles.spn1}>Mode of Training</span>
             <span className={styles.spn2}>Virtual Classroom (Instructor-Led)</span>
           </div>
        </div>
        <div className={styles.courseoverview_main}>
           <div className={styles.courseoverview_icon}>
           <FontAwesomeIcon icon={faDollarSign} />
           </div>
           <div className={styles.courseoverview_detail}>
             <span className={styles.spn1}>Course Fee</span>
             <span className={styles.spn2}>$499</span>
           </div>
        </div>
        <div className={styles.enrll_btncnt}>
          <a href="" className={styles.enrll_btn}>Enroll now</a>
          <a href="" className="mt-3">Training 5 or more people?</a>
        </div>
        
      </div>
    );
}

export default ETbatchdetails;