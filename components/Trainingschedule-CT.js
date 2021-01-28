import 'bootstrap/dist/css/bootstrap.min.css'
import{Table} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

function CTschedule(){
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
            <td>01-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 2</td>
            <td>02-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 3</td>
            <td>03-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 4</td>
            <td>04-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 5</td>
            <td>05-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 6</td>
            <td>06-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 7</td>
            <td>07-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
        <tr>
            <td>Session 8</td>
            <td>08-Apr</td>
            <td>6.30 PM - 9.30 PM</td>
        </tr>
    </tbody>
</Table>
    );
}

export default CTschedule;