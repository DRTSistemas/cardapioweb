"use client";

/* eslint @typescript-eslint/no-explicit-any:0  */
/* eslint @typescript-eslint/no-unsafe-member-access:0  */
/* eslint @typescript-eslint/no-unsafe-argument:0  */
/* eslint @typescript-eslint/no-unsafe-assignment:0   */

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import React from "react";

import { Button } from "@/components/ui/button";

const data = [
  {
    id: "1",
    name: "Em análise",
    items: [
      {
        id: "item 1",
        name: "Pedido 1",
        type: "Mesa 5",
      },
    ],
  },
  {
    id: "2",
    name: "Em produção",
    items: [
      {
        id: "item 2",
        name: "Pedido 2",
        type: "Delivery",
      },
      {
        id: "item 3",
        name: "Pedido 3",
        type: "Delivery",
      },
    ],
  },
  {
    id: "3",
    name: "Prontos para entrega",
    items: [],
  },
];

export function Kanban() {
  const [orderedData, setOrderedData] = React.useState(data);

  async function onDragEnd(result: any) {
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "order") {
      const newOrderedData = [...orderedData];
      console.log(newOrderedData);
      const sourceStage = newOrderedData.find(
        (stage) => stage.id === source.droppableId,
      );
      const destStage = newOrderedData.find(
        (stage) => stage.id === destination.droppableId,
      );

      if (!sourceStage || !destStage) {
        return;
      }

      if (!sourceStage.items) {
        sourceStage.items = [];
      }

      if (!destStage.items) {
        destStage.items = [];
      }

      if (source.droppableId !== destination.droppableId) {
        const [movedOrder] = sourceStage.items.splice(source.index, 1);

        if (!movedOrder) {
          return;
        }

        destStage.items.splice(destination.index, 0, movedOrder);

        setOrderedData(newOrderedData);
      }
    }
  }

  React.useEffect(() => {
    setOrderedData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-row gap-4 overflow-x-auto pb-8 pt-1">
        {orderedData.map((stage) => (
          // Column
          <div key={stage.id} className="w-full min-w-[340px] space-y-2">
            <div className="flex items-center justify-between rounded border border-dashed p-3">
              <p className="text-sm font-semibold uppercase">{stage.name}</p>
              <div className="flex gap-1">
                <Button variant={"ghost"} size={"icon"}>
                  <DotsHorizontalIcon className="size-4" />
                </Button>
              </div>
            </div>
            <Droppable droppableId={stage.id} type="order">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-2 rounded bg-muted/40 p-2"
                >
                  {stage.items.map((order, idx) => (
                    // Card
                    <Draggable
                      key={order.id}
                      draggableId={order.id}
                      index={idx}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="relative w-full rounded-md border bg-background p-3"
                        >
                          <div className="grid gap-1">
                            <div className="flex">
                              <div className="flex gap-2">
                                <div className="font-semibold">
                                  {order.name}
                                </div>
                              </div>
                            </div>
                            <div className="text-xs font-medium">
                              {order.type}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
