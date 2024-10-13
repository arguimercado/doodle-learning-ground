import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";


interface MyTextAreaFieldProps {
    label: string;
    field: any;
    desc?: string;
    placeholder?: string;
}

const MyTextAreaField : React.FC<MyTextAreaFieldProps> = ({label,field,desc,placeholder}) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Textarea placeholder={placeholder} {...field} />
            </FormControl>
            <FormDescription>{desc}</FormDescription>
            <FormMessage />
        </FormItem>
    );
};

export default MyTextAreaField;
