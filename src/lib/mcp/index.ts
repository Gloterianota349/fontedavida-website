import { auth, defineMcp } from "@lovable.dev/mcp-js";
import churchInfoTool from "./tools/church-info";
import listServicesTool from "./tools/list-services";
import submitPrayerRequestTool from "./tools/submit-prayer-request";
import submitContactMessageTool from "./tools/submit-contact-message";

const supabaseUrl = "https://pxicselbifnbjirvmwnq.supabase.co";

export default defineMcp({
  name: "site-fonte-da-vida-toronto",
  title: "Site Fonte da Vida Toronto",
  version: "0.1.0",
  instructions:
    "Ferramentas da Igreja Apostólica Fonte da Vida Toronto. Use `church_info` para endereço e contatos, `list_services` para a agenda de cultos, `submit_prayer_request` para enviar um pedido de oração e `submit_contact_message` para enviar uma mensagem à igreja.",
  auth: auth.oauth.issuer({
    issuer: `${supabaseUrl}/auth/v1`,
    acceptedAudiences: "authenticated",
    jwksUri: `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
    resourceName: "Site Fonte da Vida Toronto",
  }),
  tools: [churchInfoTool, listServicesTool, submitPrayerRequestTool, submitContactMessageTool],
});
