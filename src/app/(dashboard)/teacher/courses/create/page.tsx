"use client"

import { Form, FormField } from '@/components/ui/form'
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import MyInputField from '@/components/features/inputs/MyInputField'
import MyTextAreaField from '@/components/features/inputs/MyTextAreaField'
import MyCombobox from '@/components/features/inputs/MyCombobox'
import { Button } from '@/components/ui/button'

//create formschema using react-hook-form
const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    author: z.string(),
    price: z.number(),
})

const categoryOptions = [
    {value: 'web-dev', label: 'Web Development'},
    {value: 'app-dev', label: 'App Development'},
    {value: 'data-science', label: 'Data Science'},
    {value: 'ai-ml', label: 'AI & ML'},
    {value: 'cyber-sec', label: 'Cyber Security'},
]

const CourseAppForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            category: '',
            author: '',
            price: 0,
        }
      })


    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField 
                    control={form.control}
                    name='title' 
                    render={({ field }) => (<MyInputField field={field} label='Title' desc='Enter course title' />)}
                />
                 <FormField 
                    control={form.control}
                    name='description' 
                    render={({ field }) => (<MyTextAreaField field={field}  label='Description' desc='Enter course description' />)}
                />
                 <FormField 
                    control={form.control}
                    name='category' 
                    render={({ field }) => (<MyCombobox 
                                                data={categoryOptions} 
                                                field={field}  
                                                label='Category' 
                                                desc='Enter course category' />)}
                />
                 <FormField 
                    control={form.control}
                    name='author' 
                    render={({ field }) => (<MyInputField field={field}  label='Author' desc='Enter course author' />)}
                />
                 <FormField 
                    control={form.control}
                    name='price' 
                    render={({ field }) => (<MyInputField type="number" field={field}  label='Price' desc='Enter course price' />)}
                />
                <div className='flex flex-row items-center justify-end'>
                    <Button type='submit' >Create Course</Button>
                </div>
            </form>
        </Form>
    )
}

const CreatePage = () => {
  return (
    <div className='max-w-5xl mx-auto flex flex-col md:items-center md:justify-center p-6 h-full'>
        <div className='w-full bg-white shadow-sm p-3 my-4'>
            <div className='py-4'>
                <h1 className='text-2xl'>Create your course</h1>
                <p className='text-sm text-neutral-400'>Enter Information of your course</p>
            </div>
            <CourseAppForm />
        </div>
        
    </div>
  )
}

export default CreatePage
// Remove the incorrect zodResolver function implementation

