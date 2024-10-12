import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

const Combobox = ({data, value, placeholder,setValue} : {data: any[], value: any,placeholder?: string, setValue: (value:any) => void}) => {
    const [open, setOpen] = React.useState(false)
    
    return(
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    )
}

const MyCombobox = ({
    field,
    label,
    desc,
    data,
}: {
    label: string;
    field: any;
    desc?: string;
    data: any[];
}) => {
    return (
        <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Combobox data={data} placeholder="Select Item" value={field.value} setValue={field.onChange} />
            </FormControl>
            <FormDescription>{desc}</FormDescription>
        </FormItem>
    );
};

export default MyCombobox;
