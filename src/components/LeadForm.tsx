"use client";

import { useActionState } from "react";
import { submitLead, type FormState } from "@/app/actions";

const initial: FormState = { ok: false, message: "" };

type Props = {
  topics?: string[];
  defaultTopic?: string;
  button?: string;
  showPlate?: boolean;
};

export default function LeadForm({
  topics = ["Cumpărare vehicul", "Finanțare", "Programare service", "Piese"],
  defaultTopic,
  button = "Trimite cererea",
  showPlate = false,
}: Props) {
  const [state, action, pending] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <p role="status" className="border-l-4 border-brand bg-surface p-4 font-medium">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Nume
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Telefon
          <input name="phone" type="tel" required autoComplete="tel" className="field" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Subiect
          <select name="topic" defaultValue={defaultTopic ?? topics[0]} className="field">
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        {showPlate && (
          <label className="grid gap-1 text-sm font-medium">
            Număr de înmatriculare
            <input name="plate" className="field" placeholder="SB 00 ABC" />
          </label>
        )}
      </div>

      <label className="grid gap-1 text-sm font-medium">
        Mesaj (opțional)
        <textarea name="message" rows={3} className="field" />
      </label>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" name="gdpr" className="mt-1" />
        Sunt de acord cu prelucrarea datelor personale pentru a fi contactat.
      </label>

      {state.message && (
        <p role="alert" className="text-sm font-medium text-danger">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary w-full sm:w-fit disabled:opacity-60">
        {pending ? "Se trimite…" : button}
      </button>
    </form>
  );
}
