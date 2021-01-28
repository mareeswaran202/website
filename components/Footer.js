import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

function Footer(){
    return(
        <div className={styles.footer}>
     <Container style={{padding:'50px 15px 15px 15px'}}>
         <Row>
             <Col col sm={6} lg={4}>
               <h3>Excel Courses</h3>
               <ul>
                   <li>Excel Training Chennai</li>
                   <li>Excel Training Hyderabad</li>
                   <li>Excel Training Pune</li>
                   <li>Excel Training Coimbatore</li>
                   <li>Excel Training Sanjose</li>
                   <li>Excel Training Texas</li>
               </ul>
             </Col>
             <Col sm={6} lg={4}>
               <h3>Excel VBA Courses</h3>
               <ul>
                   <li>Excel VBA Training Chennai</li>
                   <li>Excel VBA Training Hyderabad</li>
                   <li>Excel VBA Training Pune</li>
                   <li>Excel VBA Training Coimbatore</li>
                   <li>Excel VBA Training Sanjose</li>
                   <li>Excel VBA Training Texas</li>
               </ul>
             </Col>
             <Col sm={6} lg={4}>
                <h3>Power BI Courses</h3>
                <ul>
                   <li>PowerBI Training Chennai</li>
                   <li>PowerBI Training Hyderabad</li>
                   <li>PowerBI Training Pune</li>
                   <li>PowerBI Training Coimbatore</li>
                   <li>PowerBI Training Sanjose</li>
                   <li>PowerBI Training Texas</li>
               </ul>
             </Col>
         </Row>
     </Container>
     </div>
    );
}


export default Footer;