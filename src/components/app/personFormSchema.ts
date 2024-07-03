import { z } from "zod";

const PHONE_NUMBER_REGEX =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const personFormSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().regex(PHONE_NUMBER_REGEX),
  company: z.string().min(3),
});

export type PersonFormSchema = typeof personFormSchema;

export const DEFAULT_VALUES_FOR_EMPTY_PERSON_RECORD = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
} as z.infer<PersonFormSchema>;
