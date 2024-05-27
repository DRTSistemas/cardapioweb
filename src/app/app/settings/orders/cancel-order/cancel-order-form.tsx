"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { toast } from "@/components/ui/use-toast"

const notificationsFormSchema = z.object({
  type: z.enum(["all", "mentions", "123"], {
    required_error: "You need to select a notification type.",
  }),
})

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>

// This can come from your database or API.

export function CancelOrderForm() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
  })

  function onSubmit(data: NotificationsFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md space-y-8"
      >
        <div>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-6">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-6"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal">
                          Não solicitar senha para cancelamento do pedidos
                        </FormLabel>
                        <FormDescription>
                          Qualquer pessoa pode cancelar os pedidos
                        </FormDescription>
                      </div>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="mentions" />
                      </FormControl>

                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal">
                          Solicitar senha do(a) atendente para cancelar pedidos
                        </FormLabel>
                        <FormDescription>
                          Ao cancelar pedidos, será solicidata a senha do(a)
                          atendente
                        </FormDescription>
                      </div>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="123" />
                      </FormControl>

                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal">
                          Solicitar senha padrão para cancelar pedidos
                        </FormLabel>
                        <FormDescription>
                          Crie uma senha padrão e utilize sempre que precisar
                          cancelar um pedido. Os pedidos só poderão ser
                          cancelados com essa senha
                        </FormDescription>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  )
}
