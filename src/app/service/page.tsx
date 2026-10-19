import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Service și piese" };

const offers = [
  "Revizii și reparații pentru Daily, Eurocargo, S-Way, X-Way și T-Way",
  "Vopsitorie și tinichigerie pentru camioane",
  "Spălare profesională pentru toate tipurile de vehicule",
  "Diagnoză și piese originale",
];

export default function ServicePage() {
  return (
    <>
      <PageTitle title="Service și piese">Service autorizat IVECO la Șelimbăr, lângă Sibiu.</PageTitle>

      <div className="container-page py-12">
        <ul className="grid gap-3 sm:grid-cols-2">
          {offers.map((o) => (
            <li key={o} className="flex gap-2 border border-line p-4">
              <span className="text-brand">✓</span> {o}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <section id="programare" className="scroll-mt-32">
            <h2 className="text-2xl font-bold">Programare service</h2>
            <p className="mt-2 text-muted">Completează câteva date și te sunăm pentru confirmare.</p>
            <div className="mt-6 border border-line p-6">
              <LeadForm topics={["Programare service", "Revizie", "Reparație", "Vopsitorie / tinichigerie"]} showPlate button="Cere programare" />
            </div>
          </section>

          <section id="piese" className="scroll-mt-32">
            <h2 className="text-2xl font-bold">Piese de schimb</h2>
            <p className="mt-2 text-muted">
              Piese originale IVECO și accesorii. Spune-ne seria șasiului sau numărul de înmatriculare și revenim cu disponibilitatea și prețul.
            </p>
            <div className="mt-6 border border-line p-6">
              <LeadForm topics={["Piese"]} showPlate button="Cere ofertă piese" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
