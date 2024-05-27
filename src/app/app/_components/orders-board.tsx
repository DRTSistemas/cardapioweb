"use client"

/* eslint @typescript-eslint/no-explicit-any:0  */
/* eslint @typescript-eslint/no-unsafe-member-access:0  */
/* eslint @typescript-eslint/no-unsafe-argument:0  */
/* eslint @typescript-eslint/no-unsafe-assignment:0   */

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"

import React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
]

export function Kanban() {
  const [orderedData, setOrderedData] = React.useState(data)

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function onDragEnd(result: any) {
    const { destination, source, type } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === "order") {
      const newOrderedData = [...orderedData]
      console.log(newOrderedData)
      const sourceStage = newOrderedData.find(
        (stage) => stage.id === source.droppableId,
      )
      const destStage = newOrderedData.find(
        (stage) => stage.id === destination.droppableId,
      )

      if (!sourceStage || !destStage) {
        return
      }

      if (!sourceStage.items) {
        sourceStage.items = []
      }

      if (!destStage.items) {
        destStage.items = []
      }

      if (source.droppableId !== destination.droppableId) {
        const [movedOrder] = sourceStage.items.splice(source.index, 1)

        if (!movedOrder) {
          return
        }

        destStage.items.splice(destination.index, 0, movedOrder)

        setOrderedData(newOrderedData)
      }
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    setOrderedData(data)
  }, [data])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex h-[calc(100vh-2rem)] flex-row gap-4 pb-20">
        {orderedData.map((stage, idx) => (
          // Column
          <div key={stage.id} className="w-full min-w-[340px] space-y-2">
            <div
              className={cn("flex items-center justify-between rounded p-3", {
                "bg-yellow-500 dark:bg-yellow-500/70": idx === 0,
                "bg-orange-500 dark:bg-orange-500/70": idx === 1,
                "bg-green-500 dark:bg-green-500/70": idx === 2,
              })}
            >
              <p className="font-semibold text-sm">{stage.name}</p>
              <div className="flex gap-1">
                <Button variant={"outline"} size={"icon"}>
                  {stage.items.length}
                </Button>
              </div>
            </div>
            <Droppable droppableId={stage.id} type="order">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn("h-full space-y-2 rounded bg-muted/40 p-2", {
                    // "bg-yellow-500/50 dark:bg-yellow-500/10": idx === 0,
                    // "bg-orange-500/50 dark:bg-orange-500/10": idx === 1,
                    // "bg-green-500/50 dark:bg-green-500/10": idx === 2,
                  })}
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
                          className={cn(
                            "relative w-full rounded-md border bg-background p-3",
                          )}
                        >
                          <div className="grid gap-1">
                            <div className="flex">
                              <div className="flex gap-2">
                                <div className="font-semibold">
                                  {order.name}
                                </div>
                              </div>
                            </div>
                            <div className="font-medium text-xs">
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
  )
}
