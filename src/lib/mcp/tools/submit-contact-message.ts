import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "submit_contact_message",
  title: "Enviar mensagem de contato",
  description:
    "Envia uma mensagem de contato para a igreja, igual ao formulário do site. Confirme os dados com a pessoa antes de enviar.",
  inputSchema: {
    name: z.string().trim().describe("Nome de quem escreve."),
    email: z.string().trim().describe("E-mail para resposta."),
    phone: z.string().trim().optional().describe("Telefone (opcional)."),
    subject: z.string().trim().describe("Assunto da mensagem."),
    message: z.string().trim().describe("Conteúdo da mensagem."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, phone, subject, message }) => {
    if (name.length < 2 || !email.includes("@") || subject.length < 2 || message.length < 10) {
      return {
        content: [
          {
            type: "text" as const,
            text: "Dados inválidos: informe nome, e-mail válido, assunto e uma mensagem com pelo menos 10 caracteres.",
          },
        ],
        isError: true,
      };
    }
    const { error } = await supabaseAnon().from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      subject,
      message,
    });
    if (error) {
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text" as const, text: "Mensagem enviada para a igreja." }],
      structuredContent: { ok: true },
    };
  },
});
