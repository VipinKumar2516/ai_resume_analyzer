import React from 'react'
import styles from './SideBar.module.css'
import ArticleIcon from '@mui/icons-material/Article'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HistoryIcon from '@mui/icons-material/History'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', Icon: DashboardIcon },
  { to: '/history', label: 'History', Icon: HistoryIcon },
  { to: '/admin', label: 'Admin', Icon: AdminPanelSettingsIcon },
]

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/* Logo + title on ONE line */}
      <div className={styles.sideBarIcon}>
        <ArticleIcon sx={{ fontSize: '1.8em' }} />
        <div className={styles.sideBartop}>Resume Scorer</div>
      </div>

      <div className={styles.sideBaroptionBlock}>
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [styles.sideBaroption, isActive ? styles.selectedOption : ''].join(' ')
            }
          >
            <Icon sx={{ fontSize: '1.5em' }} />
            <div>{label}</div>
          </NavLink>
        ))}

        {/* Logout pinned to the bottom of the sidebar */}
        <div className={[styles.sideBaroption, styles.logout].join(' ')}>
          <LogoutIcon sx={{ fontSize: '1.5em' }} />
          <div>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default SideBar