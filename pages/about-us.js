import Head from 'next/head';
import Topnav from '../components/Topnavbar';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
function About() {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="robots" content="noindex" />
            </Head>

            <Topnav></Topnav>

            <Container fluid>

                <Row>
                    <Col className={styles.bannercontainer}>
                        <img src="/images/about-us-banner-new.png"></img>
                    </Col>
                </Row>
                <Row className={styles.topmainheading}>
           <Col>
           <h3>About Excelgoodies</h3>
             
           </Col>
         </Row>         
            </Container>
            <Container>
            <Row mt-5>
           <Col>
           <p className={styles.about_ustxt}>Excelgoodies (EG) is a leading Microsoft Excel Training and Consulting service provider. It was incorporated in the year 2006 with a sole purpose of creating Excel Maestros and providing exclusive Excel based solutions.</p>
           <p className={styles.about_ustxt}>EG has a wide range of Excel services in the basket including Excel Model building or simulation, Process and Report Automation, Excel to .Net migration, tailor-made Excel VBA Training for varied disciplines, Business Profitability Consulting, Management Reporting etc.</p>
           <p className={styles.about_ustxt}>In the year 2009, EG partnered with Microsoft Inc. representing the Authorized Testing Center for Microsoft Certifications. By the end of 2010, it was successful in creating 7000+ Excel maestros and had assisted more than 250+ corporate with Excel based solutions. It has successfully served companies of all size and across industries with their Excel needs.</p>
           </Col>
         </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default About;