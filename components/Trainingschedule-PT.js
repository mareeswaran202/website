import 'bootstrap/dist/css/bootstrap.min.css'
import{Table} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

function PTschedule(){
    return(
<Table className={styles.training_tbl}>
    <thead>
        <tr>
            <th>Session</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Session 1</td>
            <td>16-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 2</td>
            <td>17-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 3</td>
            <td>18-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 4</td>
            <td>19-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 5</td>
            <td>20-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 6</td>
            <td>21-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 7</td>
            <td>22-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
        <tr>
            <td>Session 8</td>
            <td>23-Mar</td>
            <td>10.30 PM - 1.30 PM</td>
        </tr>
    </tbody>
</Table>
    );
}

export default PTschedule;