import React from 'react'
import styles from './SideBar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
        <div className={styles.sideBarIcon}>
            <ArticleIcon sx={{ fontSize: 55,marginBottom: 2}} />
            <div className={styles.sideBartop}>Resume Scorer</div>
        </div>

        <div className={styles.sideBaroptionBlock}>
            <Link to={'/dashboard'} className={styles.sideBaroption}>
                <DashboardIcon sx={{ fontSize:38 }} />
                <div>
                    Dashboard
                </div>
            </Link>

            <Link to={'/history'} className={styles.sideBaroption}>
                <HistoryIcon sx={{ fontSize:38 }} />
                <div>
                    History
                </div>
            </Link>

            <Link to={'/admin'} className={styles.sideBaroption}>
                <AdminPanelSettingsIcon sx={{ fontSize:38 }} />
                <div>
                    Admin
                </div>
            </Link>

            <div className={styles.sideBaroption}>
                <LogoutIcon sx={{ fontSize:38 }} />
                <div>
                    Logout
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
