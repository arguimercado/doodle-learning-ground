"use client"

import { Form, FormField } from "@/components/ui/form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MyInputField from "@/components/features/inputs/MyInputField";
import MyTextAreaField from "@/components/features/inputs/MyTextAreaField";
import MyCombobox from "@/components/features/inputs/MyCombobox";
import { Button } from "@/components/ui/button";
import HttpClient from "@/lib/http-client";
import { useToast } from "@/hooks/use-toast";
import { categoryOptions } from "@/data/constants";


//create formschema using react-hook-form
const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.string(),
    author: z.string(),
    price: z.coerce.number(),
 });
 
 const CourseAppForm = () => {
    const { toast } = useToast();
 
    const form = useForm<z.infer<typeof formSchema>>({
       resolver: zodResolver(formSchema),
       defaultValues: {
          title: "",
          description: "",
          categoryId: "",
          author: "",
          price: 0,
       },
    });
 
    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
       try {
          //send data to server using http-client
          const httpClient = new HttpClient();
          const response = await httpClient.post("/courses", values);
          console.log(response);
          toast({
             title: "Course Created",
             description: "Course has been created successfully",
          });
       } catch (err) {
          console.log(err);
       }
    };
 
    return (
       <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
             <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                   <MyInputField
                      field={field}
                      label="Title"
                      desc="Enter course title"
                   />
                )}
             />
             <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                   <MyTextAreaField
                      field={field}
                      label="Description"
                      desc="Enter course description"
                   />
                )}
             />
             <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                   <MyCombobox
                      data={categoryOptions}
                      field={field}
                      label="Category"
                      desc="Enter course category"
                   />
                )}
             />
             <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                   <MyInputField
                      field={field}
                      label="Author"
                      desc="Enter course author"
                   />
                )}
             />
             <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                   <MyInputField
                      type="number"
                      field={field}
                      label="Price"
                      desc="Enter course price"
                   />
                )}
             />
             <div className="flex flex-row items-center justify-end">
                <Button type="submit">Create Course</Button>
             </div>
          </form>
       </Form>
    );
 };

 export default CourseAppForm;