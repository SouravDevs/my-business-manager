import React from 'react'
import Styles from '../User Profile/UserProfile.module.css'

function UserProfile({profileData}) {
  return (
    <div className={Styles['user-profile']}>
        <p> <b>ID : </b> {profileData.pId ? profileData.pId : '0000' } </p>
        <p>{profileData.pName ? profileData.pName : 'Alex Smith' }</p>
        <p>{profileData.pTitle ? profileData.pTitle : 'Teacher' }</p>
    </div>
  )
}

export default UserProfile