import React from 'react'
import UserSettings from './Profile'
import AppSettings from './AppSettings'

const Settings = () => {
  return (
    <div>
        <h1>application settings</h1>
        <AppSettings/>
        <h1>user settings</h1>
        <UserSettings/>
    </div>
  )
}

export default Settings