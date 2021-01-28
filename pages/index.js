import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topnav from '../components/Topnavbar';
import { Container, Col, Row, Card } from 'react-bootstrap'; 
import Footer from '../components/Footer';
export default function Home() {
  return (
     <div>
      <Head>
        <title>Excelgoodies</title>
         
      </Head>
      <Topnav></Topnav>
       <Container fluid>
         <Row>
           <Col className={styles.bannercontainer}>
           <img src="/images/Excelgoodies-main-banner.jpg"></img>
           </Col>
         </Row>
         <Row className={styles.topmainheading}>
           <Col>
           <h3>Microsoft Excel Courses</h3>
             <p>Taught by Microsoft Certified Trainers</p>
           </Col>
         </Row>
         
       </Container>
       <Container>
         <Row>
           <Col lg={4} md={6} sm={12} xs={12}>
           <Card className={styles.coursecard}>
             <img src="/images/advanced-excel-course.png"></img>
             <h3>Advanced Excel Course</h3>
             <p>It's a 15 hours Instructor-Led, activity-based Excel Training Program, covering Core Fundamentals to the most advanced Excel features.</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <Card className={styles.coursecard}>
             <img src="/images/excel-vba-course.png"></img>
             <h3>Excel VBA Macro Training</h3>
             <p>It's 25 hours Instructor-Led Program covering VB Programming, Excel Automation and Connecting Excel to third-party applications.</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <Card className={styles.coursecard}>
             <img src="/images/excel-powerpoint-course.png"></img>
             <h3>Power BI (Data Analytics)</h3>
             <p>It's 30 hours program focusing on how to work with massive datasets, import data from various sources, publish the workbooks as interactive web applications and...</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
          
         
           <Col lg={4} md={6} sm={12}>
           <Card className={styles.coursecard}>
             <img src="/images/excel-for-marketing.png"></img>
             <h3>Excel Course for Marketing</h3>
             <p>It's 20 hours program to empower you with the skills required to use Excel as a better planning tool for various marketing activities.</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <Card className={styles.coursecard}>
             <img src="/images/excel-for-finance.png"></img>
             <h3>Excel Course for Finance MIS</h3>
             <p>It's a 20 hours program customized for Finance Professionals in building up their financial reports like Profit & Loss Statement, Balance Sheet, etc. effectively.</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <Card className={styles.coursecard}>
             <img src="/images/excel-for-hr.png"></img>
             <h3>Excel Course for HR</h3>
             <p>It's a 20 hours Course designed for HR, Reward and Payroll Professionals, to dynamically report the summarized information on HR transactions...</p>
             <a href="">Get Details</a>
           </Card>
           </Col>
         </Row>
       </Container>
     <Footer></Footer>
    </div>
  )
}
