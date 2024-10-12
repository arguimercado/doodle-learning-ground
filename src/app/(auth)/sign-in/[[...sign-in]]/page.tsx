import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen w-full'>
        <SignIn />
    </div>
  )
}

export default SignInPage