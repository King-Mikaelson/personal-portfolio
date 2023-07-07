import React from 'react';
import Navigation from '@/components/navigation';


function Profile() {
  return (
    <main className='bg-white pt-8'>
      <Navigation/>
       <div className='flex items-center justify-center lg:pt-64 pt-32'>
      <h1 className='font-BebasNeue font-normal text-2xl lg:text-5xl'>Hey 👋🏼 I'm Michael</h1>
      </div>
    </main>
  )
}

export default Profile
