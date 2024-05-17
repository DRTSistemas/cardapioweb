"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "@/components/ui/sortable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CirclePlus, CopyIcon, Flag, Trash } from "lucide-react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const schema = z.object({
  categories: z.array(
    z.object({
      name: z.string(),
    }),
  ),
});

type Schema = z.infer<typeof schema>;

export function CategoriesForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      categories: [
        {
          name: "Lanches",
        },
        {
          name: "Bebidas",
        },
      ],
    },
  });

  function onSubmit(input: Schema) {
    console.log({ input });
  }

  const { fields, append, move, remove } = useFieldArray({
    control: form.control,
    name: "categories",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-4xl flex-col gap-4"
      >
        <div className="flex justify-between space-y-1">
          <h4>Categorias</h4>
          <Button
            type="button"
            className="w-fit"
            onClick={() =>
              append({
                name: "",
              })
            }
          >
            Nova categoria
          </Button>
        </div>
        <div className="space-y-2">
          <Accordion type="multiple" className="w-full">
            <Sortable
              value={fields}
              onMove={({ activeIndex, overIndex }) =>
                move(activeIndex, overIndex)
              }
              overlay={
                <div className="grid grid-cols-2 items-center gap-2 rounded border border-dashed p-4">
                  <div className="">
                    <div className="flex flex-row gap-2">
                      <Skeleton className="size-8 shrink-0 rounded-sm" />
                      <Skeleton className="h-8 w-28 rounded-sm" />
                    </div>
                    <Skeleton className="mt-4 h-8 w-[135px] rounded-sm" />
                  </div>
                  <div className="ml-auto flex flex-row items-center justify-start space-x-2">
                    <Skeleton className="h-8 w-36 shrink-0 rounded-sm" />
                    <Skeleton className="size-8 shrink-0 rounded-sm" />
                  </div>
                </div>
              }
            >
              <div className="w-full space-y-2">
                {fields.map((field, index) => (
                  <SortableItem key={field.id} value={field.id} asChild>
                    <AccordionItem value={field.name} className="border-none">
                      <div className="grid grid-cols-2 items-center gap-2 rounded border border-dashed bg-muted/40 p-4">
                        <div>
                          <div className="flex flex-row gap-2">
                            <SortableDragHandle
                              variant="outline"
                              size="icon"
                              className="size-8 shrink-0"
                            >
                              <DragHandleDots2Icon
                                className="size-4"
                                aria-hidden="true"
                              />
                            </SortableDragHandle>
                            <FormField
                              control={form.control}
                              name={`categories.${index}.name`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      className="h-8 border-none text-xl font-semibold"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          <Button
                            variant={"outline"}
                            size={"sm"}
                            className="mt-4"
                          >
                            <CirclePlus className="mr-2 size-4" /> Adicionar
                            Item
                          </Button>
                        </div>
                        <div className="ml-auto flex flex-row items-center justify-start space-x-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="sm" variant="outline">
                                <span>Ações categoria</span>
                                <ChevronDown className="ml-2 size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => remove(index)}>
                                <Flag
                                  className="mr-2 size-4"
                                  aria-hidden="true"
                                />
                                Exibição
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => remove(index)}>
                                <Icons.filepenline
                                  className="mr-2 size-4"
                                  aria-hidden="true"
                                />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />

                              <DropdownMenuItem onClick={() => remove(index)}>
                                <CopyIcon
                                  className="mr-2 size-4"
                                  aria-hidden="true"
                                />
                                Duplicar
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => remove(index)}>
                                <Trash
                                  className="mr-2 size-4"
                                  aria-hidden="true"
                                />
                                Excluir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <AccordionTrigger>
                            {/* <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-8 shrink-0"
                            >
                              <ChevronDown
                                className="size-4"
                                aria-hidden="true"
                              />
                            </Button> */}
                          </AccordionTrigger>
                        </div>
                        <AccordionContent>Itens...</AccordionContent>
                      </div>
                    </AccordionItem>
                  </SortableItem>
                ))}
              </div>
            </Sortable>
          </Accordion>
        </div>
      </form>
    </Form>
  );
}
