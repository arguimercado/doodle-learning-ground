"use client";

import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconBadge } from "@/components/features/commons/IconBadge";
import { Book, Upload } from "lucide-react";
import MyInputField from "@/components/features/inputs/MyInputField";
import MyTextAreaField from "@/components/features/inputs/MyTextAreaField";
import MyCombobox from "@/components/features/inputs/MyCombobox";
import { categoryOptions } from "@/data/constants";
import { useToast } from "@/hooks/use-toast";
import ImageForm from "./ImageForm";

const formSchema = z.object({
   title: z.string().min(3),
   description: z.string().optional(),
   author: z.string().min(3),
   categoryId: z.string().optional(),
   imageUrl: z.string(),
   price: z.coerce.number(),
});

interface EditFormProps {
   initialValues?: z.infer<typeof formSchema>;
}

const EditForm: React.FC<EditFormProps> = ({ initialValues }) => {
   const { toast } = useToast();
   const [imageUrl, setImageUrl] = React.useState<string | undefined>(
      initialValues?.imageUrl
   );

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         ...initialValues,
      },
   });

   const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
               <div>
                  <Card>
                     <CardHeader className="flex flex-row items-center gap-2">
                        <IconBadge icon={Book} variant={"default"} />
                        <span>Course Basic Information</span>
                     </CardHeader>
                     <CardContent>
                        <FormField
                           control={form.control}
                           name="title"
                           render={({ field }) => (
                              <MyInputField
                                 field={field}
                                 label="Course Title"
                                 placeholder="Enter course title"
                              />
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="description"
                           render={({ field }) => (
                              <MyTextAreaField
                                 field={field}
                                 label="Course Description"
                                 placeholder="Enter course description"
                              />
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="categoryId"
                           render={({ field }) => (
                              <MyCombobox
                                 data={categoryOptions}
                                 label="Course Category"
                                 field={field}
                              />
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="author"
                           render={({ field }) => (
                              <MyInputField
                                 field={field}
                                 label="Course Author"
                                 placeholder="Enter course author"
                              />
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="price"
                           render={({ field }) => (
                              <MyInputField
                                 field={field}
                                 label="Course Price"
                                 placeholder="Enter course price"
                              />
                           )}
                        />
                     </CardContent>
                  </Card>
               </div>
               <div>
                  <Card>
                     <CardHeader className="flex flex-row items-center gap-2">
                        <IconBadge icon={Upload} variant={"default"} />
                        Upload Image
                     </CardHeader>
                     <CardContent>
                        <ImageForm
                           imageUrl={imageUrl}
                           onChange={(url) => {
                              console.log(url);
                              form.setValue("imageUrl", url ?? "");
                              setImageUrl(url);
                           }}
                        />
                     </CardContent>
                  </Card>
               </div>
            </div>
         </form>
      </Form>
   );
};

export default EditForm;
