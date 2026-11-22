import React from 'react'
import styles from './Dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Dashboardleft}>
        <div className={styles.Dashboardheader}>
          <div className={styles.Dashboardtitle}>Smart Resume Screening</div>
          <div className={styles.Dashboardlargetitle}>Resume Match Score</div>
        </div>

        <div className={styles.alert}>
          <div>🔔 Important Instructions</div>
          <div className={styles.instructions}>
            <div> 📄 Please paste the complete job description in the "Job Description" field.</div>
            <div> 💡 Only PDF format (.pdf) resumes are accepted.</div>
          </div>
        </div>

        <div className={styles.Dashboardcontent}>
          <div className={styles.Dashboardcontentupload}>Upload Your Resume</div>
          <div className={styles.Dashboardinputfield}>
            <label htmlFor='inputField' className={styles.Dashboardpdfinput}>Upload Resume</label>
            <input type='file' accept='.pdf' id='inputField' />
          </div>
        </div>

        <div className={styles.jobdescription}>
          <textarea className={styles.txtarea} placeholder='Paste the complete job description here...' rows="10" cols="50"></textarea>
          <div className={styles.analyzebtn}>Start Analysis</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
