"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { ChevronDownIcon } from "lucide-react"

const profileFormSchema = z.object({
  header: z.string(),
  footer: z.string(),
  font: z.enum(["inter", "manrope", "system"]),
  font_size: z.enum(["1", "2", "3"]),
  esc_poc: z.enum(["yes", "no"]),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
export function AdvanvedSettingsPrinterForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <p className="font-semibold text-muted-foreground">
          Cabeçalho e rodapé da impressão
        </p>
        <FormField
          control={form.control}
          name="header"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cabeçalho</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Para entrega" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="footer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rodapé</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Agradecemos o seu pedido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="font-semibold text-muted-foreground">
          Informações da comanda
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="font"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Fonte</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <select
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "w-full appearance-none font-normal",
                        )}
                        {...field}
                      >
                        <option value="inter">Inter</option>
                        <option value="manrope">Manrope</option>
                        <option value="system">System</option>
                      </select>
                    </FormControl>
                    <ChevronDownIcon className="absolute top-2.5 right-3 h-4 w-4 opacity-50" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="font_size"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Tamanho da fonte</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <select
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "w-full appearance-none font-normal",
                        )}
                        {...field}
                      >
                        <option value="inter">1</option>
                        <option value="manrope">2</option>
                        <option value="system">3</option>
                      </select>
                    </FormControl>
                    <ChevronDownIcon className="absolute top-2.5 right-3 h-4 w-4 opacity-50" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="font"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>CNPJ</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input placeholder="XX.XXX.XXX/XXXX-XX" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="font"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Telefone</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="font"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Informação</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input placeholder="Insira sua informação" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="font-semibold text-muted-foreground">
          Configuração da impressão
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <FormField
              control={form.control}
              name="esc_poc"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-3">
                  <FormLabel>Comandos ESC/POC</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex w-full flex-row items-start"
                    >
                      <FormItem className="flex w-1/2 items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">Sim</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="123" />
                        </FormControl>
                        <FormLabel className="font-normal">Não</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="esc_poc"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-3">
                  <FormLabel>Ultilizar negrito</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex w-full flex-row items-start"
                    >
                      <FormItem className="flex w-1/2 items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">Sim</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="123" />
                        </FormControl>
                        <FormLabel className="font-normal">Não</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-row justify-between gap-4">
              <FormField
                control={form.control}
                name="font"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Codificacão</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <select
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full appearance-none font-normal",
                          )}
                          {...field}
                        >
                          <option value="inter">Inter</option>
                          <option value="manrope">Manrope</option>
                          <option value="system">System</option>
                        </select>
                      </FormControl>
                      <ChevronDownIcon className="absolute top-2.5 right-3 h-4 w-4 opacity-50" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="font_size"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Linhas extras</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <select
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full appearance-none font-normal",
                          )}
                          {...field}
                        >
                          <option value="inter">1</option>
                          <option value="manrope">2</option>
                          <option value="system">3</option>
                        </select>
                      </FormControl>
                      <ChevronDownIcon className="absolute top-2.5 right-3 h-4 w-4 opacity-50" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full flex-row justify-between gap-4">
              <FormField
                control={form.control}
                name="font"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Comando de corte</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input placeholder="Digite o comando aqui" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="font_size"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Graveta de dinheiro</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <select
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full appearance-none font-normal",
                          )}
                          {...field}
                        >
                          <option value="inter">1</option>
                          <option value="manrope">2</option>
                          <option value="system">3</option>
                        </select>
                      </FormControl>
                      <ChevronDownIcon className="absolute top-2.5 right-3 h-4 w-4 opacity-50" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="font-semibold text-muted-foreground">Imagem</p>
            <FormField
              control={form.control}
              name="font"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Imagem URL</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Coloque a URL da logo aqui"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  )
}
