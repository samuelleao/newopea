import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Form } from "./_components/form"
import { Separator } from "../ui/separator"

export function CreateEmissionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar emissão</Button>
      </DialogTrigger>
      <DialogContent className="gap-0">
        <DialogHeader className="">
          <DialogTitle>👋🏼 Vamos lá criar uma nova emissão</DialogTitle>
          <DialogDescription className="pb-2">
            Preencha os campos abaixo para criar uma nova emissão e compartilhar com a comunidade.
          </DialogDescription>
          <Separator className="-mx-6 w-auto" />
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  )
}