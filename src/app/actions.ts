"use server";

export type FormState = { ok: boolean; message: string };

const required = (v: FormDataEntryValue | null) => typeof v === "string" && v.trim().length > 0;

export async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const gdpr = formData.get("gdpr");

  if (!required(name) || !required(phone)) {
    return { ok: false, message: "Completează numele și telefonul." };
  }
  if (!gdpr) {
    return { ok: false, message: "Trebuie să accepți prelucrarea datelor." };
  }
  if (!/^[+\d][\d\s().-]{6,}$/.test(String(phone).trim())) {
    return { ok: false, message: "Numărul de telefon nu pare valid." };
  }

  // TODO: trimite lead-ul pe email (Resend/SMTP) sau într-un CRM.
  console.log("lead", Object.fromEntries(formData));

  return { ok: true, message: "Mulțumim! Te sunăm în cel mai scurt timp." };
}
