import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicle, vehicleImage, vehicles } from "@/lib/vehicles";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(props: PageProps<"/vehicule/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  return vehicle ? { title: `IVECO ${vehicle.name}`, description: vehicle.summary } : {};
}

export default async function VehiclePage(props: PageProps<"/vehicule/[slug]">) {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  return (
    <div className="container-page py-10">
      <Link href="/vehicule" className="text-sm font-medium text-brand">← Toată gama</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="photo relative aspect-[4/3] overflow-hidden">
          <Image src={vehicleImage(vehicle.name)} alt={`IVECO ${vehicle.name}`} fill priority sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-brand">{vehicle.mission}</p>
          <h1 className="mt-1 text-4xl font-bold">IVECO {vehicle.name}</h1>
          <p className="mt-3 text-lg text-muted">{vehicle.summary}</p>

          <ul className="mt-6 space-y-2">
            {vehicle.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-brand">✓</span> {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/contact?vehicul=${encodeURIComponent(vehicle.name)}`} className="btn btn-primary">Cere ofertă</Link>
            <Link href="/stoc" className="btn btn-dark">Vezi din stoc</Link>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Specificații</h2>
        <dl className="mt-4 divide-y divide-line border border-line">
          {vehicle.specs.map((s) => (
            <div key={s.label} className="grid gap-1 p-4 sm:grid-cols-3">
              <dt className="font-medium">{s.label}</dt>
              <dd className="text-muted sm:col-span-2">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-muted">Date orientative; verifică fișa tehnică oficială.</p>
      </section>
    </div>
  );
}
