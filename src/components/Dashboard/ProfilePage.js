import React from 'react'
import Navbar from './Navbar'
import ProfileAdmin from './ProfileAdmin'

const ProfilePage = () => {
  return (
    <div className="flex h-screen ">
      <div className="flex-grow bg-gray-100 overflow-auto"> 
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="gap-3 overflow-auto bg-gray-100">
            <ProfileAdmin/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
