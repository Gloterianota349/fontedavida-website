import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "submit_prayer_request",
  title: "Enviar pedido de oração",
  description:
    "Envia um pedido de oração para a equipe da igreja, igual ao formulário do site. Confirme os dados com a pessoa antes de enviar.",
  inputSchema: {
    name: z.string().trim().describe("Nome de quem faz o pedido."),
    email: z.string().trim().describe("E-mail para contato."),
    phone: z.string().trim().optional().describe("Telefone (opcional)."),
    request: z.string().trim().describe("O pedido de oração."),
    isPrivate: z.boolean().default(false).describe("Manter o pedido confidencial."),
    urgency: z.enum(["normal", "urgente"]).default("normal").describe("Urgência do pedido."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, phone, request, isPrivate, urgency }) => {
    if (name.length < 2 || !email.includes("@") || request.length < 10) {
      return {
        content: [
          {
            type: "text" as const,
            text: "Dados inválidos: informe nome, um e-mail válido e um pedido com pelo menos 10 caracteres.",
          },
        ],
        isError: true,
      };
    }
    const { error } = await supabaseAnon().from("prayer_requests").insert({
      name,
      email,
      phone: phone || null,
      request,
      is_private: isPrivate ?? false,
      urgency: urgency ?? "normal",
    });
    if (error) {
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text" as const, text: "Pedido de oração enviado. A equipe vai orar por você." }],
      structuredContent: { ok: true },
    };
  },
});
