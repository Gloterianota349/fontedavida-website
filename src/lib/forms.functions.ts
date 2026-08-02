import { createServerFn } from "@tanstack/react-start";
import { contactSchema, prayerSchema } from "./form-schemas";

export const submitPrayerRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => prayerSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("prayer_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      request: data.request,
      is_private: data.isPrivate,
      urgency: data.urgency,
    });
    if (error) {
      console.error("[prayer_requests]", error.message);
      throw new Error("Não foi possível enviar seu pedido agora.");
    }
    return { ok: true as const };
  });

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
    });
    if (error) {
      console.error("[contact_messages]", error.message);
      throw new Error("Não foi possível enviar sua mensagem agora.");
    }
    return { ok: true as const };
  });
