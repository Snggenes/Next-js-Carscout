"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { years, prices } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { FormSelect, FormInput } from "../form-elements";

const MainPageSearchSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  price: z.string().optional(),
  address: z.string().optional(),
});

type SearchFormProps = {
  className?: string;
  count: number;
  brands: string[];
  models: string[];
};

export default function SearchForm({
  className,
  count,
  brands,
  models,
}: SearchFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof MainPageSearchSchema>>({
    resolver: zodResolver(MainPageSearchSchema),
  });

  function onSubmit(data: z.infer<typeof MainPageSearchSchema>) {
    const nonEmptyEntries = Object.entries(data)
      .filter(([key, value]) => value !== undefined)
      .filter(([key, value]) => key !== "brand");
    const nonEmptyValues = Object.fromEntries(nonEmptyEntries);
    console.log(nonEmptyValues);
    if (data.brand) {
      return router.push(
        `/list/${data.brand}?${new URLSearchParams(nonEmptyValues).toString()}`
      );
    }
    return router.push(
      `/list?${new URLSearchParams(nonEmptyValues).toString()}`
    );
  }

  return (
    <div className="w-full h-[171px] bg-white px-4 rounded-r-sm rounded-b-sm">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full h-full grid gap-2 border-none py-6 ` + className}
        >
          <FormSelect
            control={form.control}
            name="brand"
            defaultValues={brands}
            placeholder="Merk"
          />
          <FormSelect
            control={form.control}
            name="model"
            defaultValues={models}
            placeholder="Model"
          />
          <FormSelect
            control={form.control}
            name="price"
            defaultValues={prices}
            placeholder="Prijs tot"
          />
          <FormSelect
            control={form.control}
            name="year"
            defaultValues={years}
            placeholder="Bouwjaar vanaf"
          />
          <FormInput
            control={form.control}
            name="address"
            placeholder="Plaats of postcode"
            type="text"
          />
          <Button
            variant="menu"
            className="bg-yellow-300 flex items-center justify-center"
            type="submit"
          >
            {count} resultaten
          </Button>
          <p></p>
          <div className="w-full text-center text-sm text-blue-700 cursor-pointer">
            Uitgebreid zoeken
          </div>
        </form>
      </Form>
    </div>
  );
}
