import styles from '../styles/Home.module.css';
function Card(){
    return(
        <div className="Card">
           
             <p className={styles.top_generic_para}>Course on Excel Automation. Taught by Microsoft Certified Trainers</p>
             <p class={styles.top_para1}>
                        This is a 20-hour program, designed for Excel users, to automate routine Excel reports or processes using VBA Programming & Excel macros coupled with 90+ small-scale scenarios, 7 case studies and, a Live VBA project (post-training) to get a knack of real-time automation.
                    </p>
                    <p class={styles.top_parasub}>
                        The Course is structured in 3 phases - VB Programming, VBA (Excel Automation) and linking Excel to third-party applications.
                      
                    </p>  

                 <div className={styles.talktothetrainer}>
                 
                        <b>Talk to the Trainer</b>
                       <p class={styles.top_para_new}>
                        Know your current Excel skills through a quick pre-assessment, discuss your requirements (if any) with the Trainer and, feel your comfort level before reserving a spot.
                    </p>
                    <a href="" className={styles.schedulecalltxt}>Schedule a call</a>
                 </div>                

        </div>
    )
}

export default Card;