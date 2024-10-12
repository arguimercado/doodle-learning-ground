import { FormControl, FormDescription, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const MyTextAreaField = ({field,label,desc}: {label: string, field: any,desc?: string}) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Textarea placeholder="Enter course title" {...field} />
            </FormControl>
            <FormDescription>{desc}</FormDescription>
        </FormItem>
    );
};

export default MyTextAreaField;
