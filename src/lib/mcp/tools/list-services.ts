import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getServices } from "@/lib/church";

export default defineTool({
  name: "list_services",
  title: "Agenda de cultos",
  description:
    "Lista os cultos e encontros semanais da igreja com dia, horário, nome e descrição. Use lang para escolher o idioma (pt ou en).",
  inputSchema: {
    lang: z.enum(["pt", "en"]).default("pt").describe("Idioma da resposta: pt ou en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang }) => {
    const services = getServices(lang ?? "pt").map(({ day, time, title, description }) => ({
      day,
      time,
      title,
      description,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
