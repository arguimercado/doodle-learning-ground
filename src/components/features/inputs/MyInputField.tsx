
import { FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";

interface MyInputFieldProps {
    label: string;
    field: any;
    desc?: string;
    type?: string;
}

const MyInputField: React.FC<MyInputField> = ({field, label,desc,type}) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input placeholder="Enter course title" {...field} type={type}  />
            </FormControl>
            <FormDescription>{desc}</FormDescription>
        </FormItem>
    );
};

export default MyInputField;
