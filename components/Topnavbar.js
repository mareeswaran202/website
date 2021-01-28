import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

function Topnav() {
  return (
    <Container fluid className={styles.top_menu_pad}>
      
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link href="/" passHref><Navbar.Brand>Home</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/about-us" passHref><Nav.Link className={styles.headertxt}>About us</Nav.Link></Link>
          <Link href="/worldwide-excel-training" passHref><Nav.Link className={styles.headertxt}>Upcoming Batches</Nav.Link></Link>
          <Link href="/contact-us" passHref><Nav.Link className={styles.headertxt}>Contact us</Nav.Link></Link>


        </Nav>

      </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </Container>
  )
}

export default Topnav;