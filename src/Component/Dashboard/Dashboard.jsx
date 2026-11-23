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
          <div className={styles.alerttitle}>🔔 Important Instructions:</div>
          <div className={styles.instructions}>
            <div>📄 Please paste the complete job description in the &quot;Job Description&quot; field before submitting.</div>
            <div>💡 Only PDF format (.pdf) resumes are accepted.</div>
          </div>
        </div>

        {/* Row 1: "Upload your resume" pill + Upload Resume button */}
        <div className={styles.Dashboardcontent}>
          <div className={styles.Dashboardcontentupload}>Upload your resume</div>
          <label htmlFor="inputField" className={styles.Dashboardpdfinput}>Upload Resume</label>
          <input type="file" accept=".pdf" id="inputField" className={styles.hiddenInput} />
        </div>

        {/* Row 2: job description box + round Analyze button */}
        <div className={styles.jobdescription}>
          <textarea className={styles.txtarea} placeholder="Paste Your Job Description"></textarea>
          <button type="button" className={styles.analyzebtn}>Analyze</button>
        </div>
      </div>

      <div className={styles.Dashboardright}>
        <div className={styles.Dashboardrighttop}>
          <div>Analyze with AI</div>
          <img className={styles.profileimg}src={"data:image/webp;base64,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"}/>
          <h2>Name of User</h2>
        </div>


        <div className={styles.Dashboardrighttop}>
          <div>Result</div>
          
          <div style={{display:"flex", justifyContent:"centre", alignitems:"centre" ,gap:"20px"}}>

          </div>

          <h2>Name of User</h2>
        </div>

      </div>
    </div>
  )
}

export default Dashboard