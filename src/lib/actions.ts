'use server';

import { z } from "zod";
import { getMe, sendMessage } from "./services";
import { ContactFormState } from "./definitions";

const schemaRegister = z.object({
  name: z.string()
    .min(3, { message: "The name must be at least 3 characters long." })
    .max(50, { message: "The name must be at most 50 characters long." }),
  email: z.string()
    .email({ message: "Enter a valid e-mail address" }),
  message: z.string()
    .min(3, { message: "The message must be at least 3 characters long." })
    .max(500, { message: "The message must have a maximum of 100 characters." }),
});

export async function sendToTelegram(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = schemaRegister.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      error: null,
      message: "Missing fields. Registration error.",
    };
  }

  const message = `Name: ${validatedFields.data.name} - Email: ${validatedFields.data.email} - Message: ${validatedFields.data.message}`;

  const me = await getMe();

  if (!me) {
    return {
      ...prevState,
      error: true,
      zodErrors: null,
      message: "Service not available!",
    };
  }

  const responseData = await sendMessage(message);

  if (!responseData) {
    return {
      ...prevState,
      error: true,
      zodErrors: null,
      message: "Oops! Something has gone wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      error: responseData.error,
      zodErrors: null,
      message: "There was a problem with the registration, maybe that email is already registered.",
    };
  }

  return { ...prevState, message: 'Message sent!' };
}
