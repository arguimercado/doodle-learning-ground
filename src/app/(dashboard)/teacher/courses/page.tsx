import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CoursesPage = () => {
  return (
    <div className='mx-auto flex items-center '>
        <nav className='w-full min-h-[56px] flex flex-row bg-primarysec border-b border-b-slate-300 items-center'>
            <Link href={"/teacher/courses/create"}>
                <Button variant={"ghost"}>Add New Course</Button>
            </Link>
        </nav>
    </div>
  )
}

export default CoursesPage