import 'bootstrap/dist/css/bootstrap.min.css';
import{Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/Home.module.css';
function Subheader(){
    return(
        <Container className={styles.subheadergp}>
            <Row>
                <Col lg={6} md={6} sm={6}>
                <img src="/images/ExcelgoodiesLogo.png" className={styles.top_logo}></img>
                </Col>
                <Col lg={6} md={6} sm={6}>
                 <ul className={styles.subheader_rightsec}>
                     <li><img src="/images/phone_icon.png" style={{position:'relative', top:'-1px'}}></img><span className={styles.phone_nosfont}>650-491-3131</span></li>
                      <li><img src="/images/Microsoft_Office_Specialist.jpg"></img></li>
                 </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Subheader;