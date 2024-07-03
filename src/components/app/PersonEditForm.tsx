import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonFormSchema, personFormSchema } from "./personFormSchema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type PersonEditFormProps = {
  defaultValues: z.infer<PersonFormSchema>;
  onSave: (person: z.infer<PersonFormSchema>) => void;
};

function PersonEditForm(props: PersonEditFormProps) {
  const personForm = useForm({
    resolver: zodResolver(personFormSchema),
    defaultValues: props.defaultValues,
  });

  return (
    <Form {...personForm}>
      <div className="my-4" />

      <form onSubmit={personForm.handleSubmit(props.onSave)}>
        <FormField
          control={personForm.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center">
                <FormLabel>First name:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="col-span-3" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-4" />
        <FormField
          control={personForm.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center">
                <FormLabel>Last name:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="col-span-3" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-4" />
        <FormField
          control={personForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center">
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="col-span-3" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-4" />
        <FormField
          control={personForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center">
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                  <Input type="phone" {...field} className="col-span-3" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-4" />
        <FormField
          control={personForm.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center">
                <FormLabel>Company:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="col-span-3" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 text-right">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
}

export default PersonEditForm;
