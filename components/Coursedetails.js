import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button} from 'react-bootstrap';
import styles from '../styles/Home.module.css'; 

function Coursecontent(){
    return(
        <div>
             
        <Accordion defaultActiveKey="0">
  <Card className={styles.crd}>
    <Card.Header className={styles.crs_header}>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Excel VBA Programming
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0" className={styles.collhgt}>
      <Card.Body>
      <b>Visual Basic Editor</b>
                                <ol className={styles.crse_lst}>
                                    <li>Objects</li>
                                    <li>Methods</li>
                                    <li>Properties</li>
                                    <li>Programming Tools</li>
                                    <li>The Menu Bar</li>
                                </ol>
                                <b>The Project Explorer</b>
                                <ol className={styles.crse_lst}>
                                    <li>Using the Project Explorer</li>
                                </ol>
                                <b>Using Constants</b>
                                <ol className={styles.crse_lst}>
                                    <li>Excel Constants</li>
                                    <li>Variable Constants</li>
                                </ol>
                                <b>Excel Objects</b>
                                <ol className={styles.crse_lst}>
                                    <li>Objects, Properties and Methods</li>
                                    <li>Getting &amp; Setting Properties</li>
                                    <li>Calling Methods</li>
                                    <li>Passing Arguments</li>
                                    <li>Singular Objects &amp; Collections of Objects</li>
                                </ol>
                                <b>Using Visual Basic Functions</b>
                                <ol className={styles.crse_lst}>
                                    <li>InputBox Function </li>
                                    <li>MsgBox Function</li>
                                    <li>Using a Set Statement </li>

                                </ol>
                                <b>Building Formular Control Structures</b>
                                <ol className={styles.crse_lst}>
                                    <li>If Then Janision Structures</li>
                                    <li>Logical Operators</li>
                                    <li>Select Case Janision Structures </li>
                                    <li>Case Else</li>
                                    <li>Comparison Operators with Select Case Structure</li>
                                    <li>For Loops</li>
                                    <li>Do Loops</li>
                                    <li>While...Wend Statement</li>
                                </ol>
                                <b>Running Code</b>
                                <ol className={styles.crse_lst}>
                                    <li>Run mode and Design mode</li>
                                    <li>Running Code from the development environment</li>
                                    <li>Running Code from the host application </li>

                                </ol>
                                <b>The Properties Window</b>
                                <ol className={styles.crse_lst}>
                                    <li>Changing a Property</li>
                                </ol>
                                <b>Variables</b>
                                <ol className={styles.crse_lst}>
                                    <li>Dimensioning a variable</li>
                                    <li>Using variables in routines</li>
                                    <li>Object Variables</li>
                                </ol>
                                <b>UserForms</b>
                                <ol className={styles.crse_lst}>
                                    <li>Designing &amp; Creating Forms</li>
                                    <li>Working with Controls</li>
                                    <li>Creating Custom Dialog Boxes</li>
                                    <li>Userform Properties Methods &amp; Events</li>
                                </ol>

                                <b>Advanced VBA Programming Techniques</b>
                                <ol className={styles.crse_lst}>
                                    <li>Developing Excel Utilities with VBA </li>
                                    <li>Error Handling </li>
                                    <li>Using In-Built Excel Features in VBA </li>
                                    <li>Working with Pivot Tables </li>
                                    <li>Working with Charts </li>
                                    <li>Understanding Excel's Events</li>
                                    <li>Interacting with Other Applications </li>
                                    <li>Creating and Using Add-Ins </li>
                                </ol>
                                <b>Developing Applications</b>
                                <ol className={styles.crse_lst}>
                                    <li>Working with the Ribbon </li>
                                    <li>Working with Shortcut Menus </li>
                                    <li>Providing Help for Your Applications </li>
                                    <li>Developing User Oriented Applications </li>

                                </ol>
                                <b>Event Handling</b>
                                <ol className={styles.crse_lst}>
                                    <li>VBA Editing &amp; Debugging </li>
                                    <li>Auto Macros </li>
                                    <li>Error Handling </li>


                                </ol>
                                <b>Connecting to Database</b>
                                <ol className={styles.crse_lst}>
                                    <li>Connect to MS Access  </li>
                                    <li>Access Database &amp; Retrieve Data from MS Access  </li>
                                    <li>Create Table &amp; Query Data Filter DB using Query  </li>
                                    <li>Update and Modify DB  </li>
                                    <li>Create Single and Multiple Mapping Tables </li>
                                    <li>Filter DB using Query </li>
                                    <li>Query data grouping  </li>
                                    <li>Retrieve Data using Logical Access Query </li>
                                </ol>
                                <b>Connect Excel to Outlook</b>
                                <ol className={styles.crse_lst}>
                                    <li>Connect to Outlook using VBA   </li>
                                    <li>Query to retrieve Mail From, to and CC address  </li>
                                    <li>Retrieve Mail Subject and Time  </li>
                                    <li>Retrieve Mail Attachment  </li>

                                </ol>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
   
   
</Accordion>
</div>
    );
}

export default Coursecontent;