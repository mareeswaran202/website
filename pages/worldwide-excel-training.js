import Topnav from '../components/Topnavbar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Globalbatches() {
    return (
        <div>
            <Head>
                <title>Upcoming Excel and VBA Pages</title>
            </Head>
            <Topnav></Topnav>
            <Container fluid>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm" className={styles.upcomingschedule}>
                            <thead>
                                <tr>
                                    <th>Country / City</th>
                                    <th>Time Zone</th>
                                    <th>Training</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Course Fee</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/usa-flag.png"></img>Cambridge MA</td>
                                    <td>ET</td>
                                    <td>VBA (Macro Training)</td>
                                    <td>16-Feb-2021</td>
                                    <td>1.30 PM - 4.00 PM</td>
                                    <td>USD 499</td>
                                    <td><Link href="/excel-vba-training-cambridge" passHref><a>Details</a></Link></td>

                                </tr>
                                <tr>
                                    <td><img src="/images/usa-flag.png"></img>San Jose, CA</td>
                                    <td>PT</td>
                                    <td>VBA (Macro Training)</td>
                                    <td>16-Mar-2021</td>
                                    <td>10.30 PM - 1.30 PM</td>
                                    <td>USD 499</td>
                                    <td><Link href="/excel-vba-training-sanjose" passHref><a>Details</a></Link></td>

                                </tr>
                                <tr>
                                    <td><img src="/images/usa-flag.png"></img>Oklahomacity, OK</td>
                                    <td>CT</td>
                                    <td>VBA (Macro Training)</td>
                                    <td>1-Apr-2021</td>
                                    <td>6.30 PM - 9.30 PM</td>
                                    <td>USD 499</td>
                                    <td><Link href="/excel-vba-training-oklahoma" passHref><a>Details</a></Link></td>

                                </tr>


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Globalbatches;