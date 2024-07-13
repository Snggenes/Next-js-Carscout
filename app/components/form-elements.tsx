"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormSelectProps = {
  control: any;
  name: string;
  defaultValues: string[];
  placeholder: string;
};

export function FormSelect({
  control,
  name,
  defaultValues,
  placeholder,
}: FormSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem
            className="text-gray-700 w-full"
            onChange={(e) => {
              // @ts-ignore
              const value = e.target.value;
              const params = new URLSearchParams(searchParams.toString());

              if (!params.has(name) && params.toString().length === 0) {
                router.push(`?${name}=${value}`);
              } else {
                params.set(name, value);
                router.push(`?${params.toString()}`);
              }
            }}
          >
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="focus:border-none">
                <SelectTrigger className="border-gray-400 rounded-sm">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {defaultValues.map((defaultValue: any) => (
                  <SelectItem key={defaultValue} value={defaultValue}>
                    {defaultValue}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </>
  );
}

type FormInputProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
};

export function FormInput({
  control,
  name,
  placeholder,
  type,
}: FormInputProps) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="text-gray-800">
            <FormControl>
              <Input placeholder={placeholder} {...field} type={type} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
