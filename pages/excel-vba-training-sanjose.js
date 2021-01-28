import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Topnav from '../components/Topnavbar';
import Subheader from '../components/sub-header-PT';
import Card from '../components/Card';
import ETbatchdetails from '../components/Batchdetails-PT';
import Coursecontent from '../components/Coursedetails';
import Posttraining from '../components/Posttraining';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

function Excelcambridge() {
    return (


        <div>
            <Topnav></Topnav>
          <Subheader></Subheader>
            <Container className="mt-5">
                <Row>
                    <Col lg={7}>
                    <h3 className={styles.top_generic_headvba}>Excel VBA Training in Sanjose</h3>
                        <Card></Card>
                    </Col>
                    <Col lg={5}>
                        <ETbatchdetails></ETbatchdetails>
                    </Col>
                </Row>
                <Row className={styles.sectiongp}>
                    <Col><h3 className={styles.innersectionheader}>Course Content - Overview</h3></Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        <Coursecontent></Coursecontent>
                    </Col>
                    <Col lg={5}>
                        <Posttraining></Posttraining>
                    </Col>
                </Row>
                <Row className={styles.sectiongp}>
                <div className={styles.about_trainer}>
                    <Col lg={7}>
                   
                     <h3>About the Trainer</h3>
                     <p className={styles.about_trainersub}>Mr.Sami <span>(MCT, MOS, MEE)</span></p>
                     <p>Mr. Sami, Microsoft Certified Trainer, with his qualifications in Finance and IT brings in 14 years of Industry experience. He has successfully trained 6000+ professionals by now, and the counting is still on.</p>
                     <p>He has undertaken the renowned VBA assignments with IRS, The World Bank, Tata Chemicals, Buckman Laboratories, Standard Chartered, ING Barings and much more. His nature of going that Extra Mile has got him the startling popularity amongst the Excelgoodies prominent clients.</p>
                   
                    </Col>
                    <Col lg={5} className={styles.certificate_con}>
                        <img src="/images/MCT-2018.png"></img>
                        <img src="/images/Exam-778-UPDATED.png"></img>
                    </Col>
                    </div>
                </Row>
            </Container>
            
                <Footer></Footer>
             
        </div>

    );
}

export default Excelcambridge;