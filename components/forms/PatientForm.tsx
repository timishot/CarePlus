"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFIeldType {
  INPUT = 'input',
  TEXTAREA = 'textarea', 
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1> Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField
        fieldType={FormFIeldType.INPUT}
        control={form.control}
        name="name"
        label="Full name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        />

        <CustomFormField
        fieldType={FormFIeldType.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="timidotcom58@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        />

        <CustomFormField
        fieldType={FormFIeldType.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone numerer"
        placeholder="+234 803 558 8623"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm