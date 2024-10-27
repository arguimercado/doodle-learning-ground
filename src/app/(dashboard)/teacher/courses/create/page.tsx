import React from "react";
import CourseAppForm from "./_components/CourseAppForm";

/***
 * TODO: Refactor the form schema to use the correct zodResolver function implementation
 * @param formSchema
 */


const CreatePage = () => {

   return (
      <div className="max-w-5xl mx-auto flex flex-col md:items-center md:justify-center p-6 h-full">
         <div className="w-full bg-white shadow-sm p-3 my-4">
            <div className="py-4">
               <h1 className="text-2xl">Create your course</h1>
               <p className="text-sm text-neutral-400">
                  Enter Information of your course
               </p>
            </div>
            <CourseAppForm />
         </div>
      </div>
   );
};

export default CreatePage;
// Remove the incorrect zodResolver function implementation
