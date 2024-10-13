
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";

interface MyInputFieldProps {
    label: string;
    field: any;
    desc?: string;
    type?: string;
    placeholder?: string;
}

const MyInputField: React.FC<MyInputField> = ({field, label,desc,type,placeholder}) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input placeholder={placeholder} {...field} type={type}  />
            </FormControl>
            <FormDescription>{desc}</FormDescription>
            <FormMessage />
        </FormItem>
    );
};

export default MyInputField;
