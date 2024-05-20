"use client";

import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "@/components/ui/sortable";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { ChevronDown, CirclePlus, CopyIcon, Flag, Trash } from "lucide-react";
import React from "react";
const data = [
  {
    id: "1",
    name: "Lanches",
  },
  {
    id: "2",
    name: "Bebidas",
  },
  {
    id: "3",
    name: "Sobremesas",
  },
];

export function Categories() {
  const [categories, setCategories] = React.useState(data);
  const [mounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    setCategories(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!mounted) {
    return <p>Carregando</p>;
  }

  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <div className="flex justify-between space-y-1">
        <h4>Categorias</h4>
        <Button type="button" className="w-fit">
          Nova categoria
        </Button>
      </div>
      <div className="space-y-2">
        <Accordion type="multiple" className="w-full">
          <Sortable
            value={categories}
            onMove={({ activeIndex, overIndex }) => {
              const newOrder = [...categories];
              const [movedItem] = newOrder.splice(activeIndex, 1);
              newOrder.splice(overIndex, 0, movedItem!);
              setCategories(newOrder);
            }}
            overlay={
              <div className="grid grid-cols-2 items-center gap-2 rounded border border-dashed p-4">
                <div>
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
              {categories.map((item) => (
                <SortableItem key={item.id} value={item.id} asChild>
                  <AccordionItem value={item.id} className="border-none">
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

                          <Input
                            defaultValue={item.name}
                            className="h-8 border-none text-xl font-semibold"
                          />
                        </div>
                        <Button
                          variant={"outline"}
                          size={"sm"}
                          className="mt-4"
                        >
                          <CirclePlus className="mr-2 size-4" /> Adicionar Item
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
                            <DropdownMenuItem>
                              <Flag
                                className="mr-2 size-4"
                                aria-hidden="true"
                              />
                              Exibição
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Icons.filepenline
                                className="mr-2 size-4"
                                aria-hidden="true"
                              />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                              <CopyIcon
                                className="mr-2 size-4"
                                aria-hidden="true"
                              />
                              Duplicar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Trash
                                className="mr-2 size-4"
                                aria-hidden="true"
                              />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <AccordionTrigger />
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
    </div>
  );
}
