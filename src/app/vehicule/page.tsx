import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { vehicleImage, vehicles } from "@/lib/vehicles";

export const metadata: Metadata = { title: "Gama de vehicule IVECO" };

export default function VehiculePage() {
  return (
    <>
      <PageTitle title="Gama IVECO">Utilitare și camioane pentru orice tip de transport.</PageTitle>

      <div className="container-page py-12">
        {(["Utilitare", "Camioane"] as const).map((cat) => (
          <section key={cat} className="mb-12 last:mb-0">
            <h2 className="border-b border-line pb-2 text-xl font-bold">{cat}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles
                .filter((v) => v.category === cat)
                .map((v) => (
                  <Link key={v.slug} href={`/vehicule/${v.slug}`} className="group border border-line bg-white">
                    <div className="photo relative aspect-[16/10] overflow-hidden">
                      <Image src={vehicleImage(v.name)} alt={`IVECO ${v.name}`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold group-hover:text-brand">{v.name}</h3>
                      <p className="mt-1 text-sm text-muted">{v.summary}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
