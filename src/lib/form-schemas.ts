import { z } from "zod";

export const prayerSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  request: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre seu pedido")
    .max(2000),
  isPrivate: z.boolean(),
  urgency: z.enum(["normal", "urgente"]),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Informe o assunto").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Escreva sua mensagem")
    .max(2000),
});

export type PrayerInput = z.infer<typeof prayerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
