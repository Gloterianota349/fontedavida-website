import { defineTool } from "@lovable.dev/mcp-js";
import { CHURCH } from "@/lib/church";

export default defineTool({
  name: "church_info",
  title: "Informações da igreja",
  description:
    "Retorna as informações públicas da Igreja Apostólica Fonte da Vida Toronto: endereço, telefone, WhatsApp, e-mail, Instagram, YouTube e link do mapa.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: CHURCH.name,
      address: CHURCH.address,
      phone: CHURCH.phone,
      whatsapp: CHURCH.whatsapp,
      email: CHURCH.email,
      instagram: CHURCH.instagram,
      youtube: CHURCH.youtube,
      directions: CHURCH.mapsDirections,
      website: "https://fontedavida-toronto.lovable.app",
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
