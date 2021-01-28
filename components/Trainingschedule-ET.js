import 'bootstrap/dist/css/bootstrap.min.css'
import{Table} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

function ETschedule(){
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
            <td>16-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 2</td>
            <td>17-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 3</td>
            <td>18-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 4</td>
            <td>19-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 5</td>
            <td>20-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 6</td>
            <td>21-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 7</td>
            <td>22-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
        <tr>
            <td>Session 8</td>
            <td>23-Feb</td>
            <td>1.30 PM - 4.00 PM</td>
        </tr>
    </tbody>
</Table>
    );
}

export default ETschedule;