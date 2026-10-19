import type { Metadata } from "next";
import { Suspense } from "react";
import LeadForm from "@/components/LeadForm";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

async function Interest({ searchParams }: Pick<PageProps<"/contact">, "searchParams">) {
  const { vehicul } = await searchParams;
  if (typeof vehicul !== "string") return null;
  return (
    <p className="mb-6 border-l-4 border-brand bg-surface p-4 text-sm">
      Ești interesat de: <strong>{vehicul}</strong>
    </p>
  );
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <>
      <PageTitle title="Contact">Scrie-ne sau sună-ne. Răspundem în aceeași zi lucrătoare.</PageTitle>

      <div className="container-page grid gap-12 py-12 md:grid-cols-2">
        <div>
          <Suspense>
            <Interest searchParams={props.searchParams} />
          </Suspense>
          <div className="border border-line p-6">
            <LeadForm defaultTopic="Cumpărare vehicul" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-bold">Adresă</h2>
            <p className="text-muted">{site.address}</p>
          </div>
          <div>
            <h2 className="font-bold">Telefon și email</h2>
            <p><a href={site.phoneHref} className="text-brand hover:underline">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a></p>
          </div>
          <div>
            <h2 className="font-bold">Program</h2>
            <ul className="text-muted">
              {site.schedule.map((s) => (
                <li key={s.days}>{s.days}: {s.hours}</li>
              ))}
            </ul>
          </div>
          <div className="photo aspect-[16/10]">Hartă (de adăugat)</div>
        </div>
      </div>
    </>
  );
}
