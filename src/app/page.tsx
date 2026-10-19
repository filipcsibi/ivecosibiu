import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import StockCard from "@/components/StockCard";
import { site } from "@/lib/site";
import { stock } from "@/lib/stock";
import { vehicleImage, vehicles } from "@/lib/vehicles";

export default function Home() {
  return (
    <>
      {/* HERO pe toată lățimea */}
      <section className="shade relative flex min-h-[34rem] items-center overflow-hidden text-white sm:min-h-[40rem]">
        <Image src="/images/hero.jpg" alt="IVECO X-Way" fill priority sizes="100vw" className="object-cover" />
        <div className="container-page relative z-10 py-16">
          <div className="glass glass-dark relative max-w-xl p-6 sm:p-9">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Vehicule comerciale IVECO în Sibiu
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Vânzări, service autorizat și piese pentru afacerea ta, la Șelimbăr.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/stoc" className="btn btn-outline">Vezi vehiculele în stoc</Link>
              <Link href="/service#programare" className="btn btn-outline">Programare service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 50 / 50 text + imagine */}
      <section className="grid md:grid-cols-2">
        <div className="flex items-center bg-white px-6 py-16 sm:px-12 lg:px-20">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bine ați venit la IVECO Sibiu</h2>
            <p className="mt-5 text-lg text-muted">
              Află mai multe despre gama noastră, vezi ce avem în stoc cu livrare rapidă și programează-te la service
              fără drumuri în plus.
            </p>
            <Link href="/vehicule" className="btn btn-dark mt-8">Descoperă gama</Link>
          </div>
        </div>
        <div className="relative min-h-[22rem]">
          <Image src="/images/s-way.jpg" alt="IVECO S-Way" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* două panouri pe jumătate de lățime */}
      <section className="grid md:grid-cols-2">
        {[
          { title: "Gama IVECO", text: "De la Daily la T-Way: alege vehiculul potrivit misiunii tale.", href: "/vehicule", cta: "Explorează gama", img: "/images/t-way.jpg", alt: "IVECO T-Way" },
          { title: "Service și piese", text: "Service autorizat, vopsitorie, tinichigerie și piese originale.", href: "/service", cta: "Vezi serviciile", img: "/images/x-way.jpg", alt: "IVECO X-Way" },
        ].map((t) => (
          <div key={t.title} className="shade-flat relative flex min-h-[26rem] items-center overflow-hidden text-white">
            <Image src={t.img} alt={t.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            <div className="relative z-10 px-6 py-12 sm:px-12 lg:px-20">
              <h2 className="text-3xl font-bold">{t.title}</h2>
              <p className="mt-3 max-w-sm text-lg text-white/90">{t.text}</p>
              <Link href={t.href} className="btn btn-outline mt-6">{t.cta}</Link>
            </div>
          </div>
        ))}
      </section>

      {/* gama, în stil card cu poză */}
      <section className="container-page py-20">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold tracking-tight">Modelele noastre</h2>
          <p className="max-w-sm text-muted">Utilitare și camioane pentru orice tip de transport.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.slice(0, 3).map((v) => (
            <Link key={v.slug} href={`/vehicule/${v.slug}`} className="group block">
              <div className="photo relative aspect-[16/10] overflow-hidden">
                <Image src={vehicleImage(v.name)} alt={`IVECO ${v.name}`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between px-1 pt-4 text-sm text-muted">
                <span>{v.category}</span>
                <span>{v.mission}</span>
              </div>
              <h3 className="mt-1 px-1 text-2xl font-bold group-hover:text-brand">IVECO {v.name}</h3>
              <p className="mt-2 px-1 text-muted">{v.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/vehicule" className="btn btn-dark">Vezi toată gama</Link>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Din stoc, cu livrare rapidă</h2>
            <Link href="/stoc" className="text-sm font-semibold text-brand hover:underline">Tot stocul →</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stock.filter((s) => s.immediate).slice(0, 3).map((item) => (
              <StockCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* contact, ca secțiunea de abonare Volvo */}
      <section className="bg-surface-2 py-20">
        <div className="container-page max-w-2xl">
          <h2 className="text-center text-3xl font-bold tracking-tight">Te sunăm noi</h2>
          <p className="mt-3 text-center text-muted">
            Spune-ne ce ai nevoie și revenim cu o ofertă sau cu o programare în service.
          </p>
          <div className="mt-8 bg-white p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* bandă foto cu locația */}
      <section className="shade-flat relative flex min-h-[26rem] items-center justify-center overflow-hidden px-6 py-16 text-center text-white">
        <Image src="/images/eurocargo.jpg" alt="IVECO Eurocargo" fill sizes="100vw" className="object-cover" />
        <div className="glass glass-dark relative z-10 max-w-xl p-8">
          <h2 className="text-3xl font-bold">Vizitează-ne la Șelimbăr</h2>
          <p className="mt-3 text-white/90">{site.address}</p>
          <ul className="mt-3 text-white/85">
            {site.schedule.map((s) => (
              <li key={s.days}>{s.days}: {s.hours}</li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-outline mt-6">Contact și locație</Link>
        </div>
      </section>
    </>
  );
}
