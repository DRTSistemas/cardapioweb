"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ChevronDownIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

const profileFormSchema = z.object({
  printer_model: z.string(),
  length: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function PrinterInfoForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="printer_model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escolha o model da impressora*</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="font-semibold text-muted-foreground">
          Configuração padrão da impressora
        </p>
        <div className="flex flex-row items-center justify-between gap-4">
          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Largura da impressão</FormLabel>
                <div className="relative w-full flex-1">
                  <FormControl>
                    <select
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full appearance-none font-normal",
                      )}
                      {...field}
                    >
                      <option value="inter">1 caracter</option>
                      <option value="manrope">2 caracteres</option>
                      <option value="system">3 caracteres</option>
                    </select>
                  </FormControl>
                  <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <Label>Numero de vias</Label>
            <div className="xs:w-auto xs:justify-normal flex w-full items-center justify-between space-x-2">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-r-none"
                >
                  <MinusIcon className="size-3" aria-hidden="true" />
                  <span className="sr-only">Remove one item</span>
                </Button>
                <Input
                  type="number"
                  min="0"
                  className="h-9 w-28 rounded-none border-x-0"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-l-none"
                >
                  <PlusIcon className="size-3" aria-hidden="true" />
                  <span className="sr-only">Add one item</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
