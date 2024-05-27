"use client"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MinusIcon, PlusIcon } from "lucide-react"

export function OrderSequenceForm() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Label>Numeração atual*</Label>
        <div className="flex w-full items-center justify-between space-x-2 xs:w-auto xs:justify-normal">
          <div className="flex items-center">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-12 rounded-r-none"
            >
              <MinusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Remove one item</span>
            </Button>
            <Input
              type="number"
              min="0"
              className="h-12 w-28 rounded-none border-x-0"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-12 rounded-l-none"
            >
              <PlusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Add one item</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label>Dias para zerar*</Label>
        <div className="flex w-full items-center justify-between space-x-2 xs:w-auto xs:justify-normal">
          <div className="flex items-center">
            <Button
              variant="outline"
              type="button"
              size="icon"
              className="size-12 rounded-r-none"
            >
              <MinusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Remove one item</span>
            </Button>
            <Input
              type="number"
              min="0"
              className="h-12 w-28 rounded-none border-x-0"
            />
            <Button
              variant="outline"
              type="button"
              size="icon"
              className="size-12 rounded-l-none"
            >
              <PlusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Add one item</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
