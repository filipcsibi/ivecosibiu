import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-surface text-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold">Vehicule</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            <li><Link href="/vehicule" className="hover:underline">Gama IVECO</Link></li>
            <li><Link href="/stoc" className="hover:underline">Vehicule în stoc</Link></li>
            <li><Link href="/finantare" className="hover:underline">Finanțare</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Service și piese</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            <li><Link href="/service#programare" className="hover:underline">Programare service</Link></li>
            <li><Link href="/service#piese" className="hover:underline">Piese de schimb</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Navigare</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:underline">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="text-[0.9375rem]">
          <p className="font-bold">Contact și locație</p>
          <p className="mt-4">{site.address}</p>
          <p className="mt-2"><a href={site.phoneHref} className="hover:underline">{site.phone}</a></p>
          <p className="mt-2"><a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a></p>
          <ul className="mt-4 space-y-1 text-muted">
            {site.schedule.map((s) => (
              <li key={s.days}>{s.days}: {s.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <div className="container-page text-sm text-muted">
          © 2026 {site.name} · Site în lucru, conținut demonstrativ
          <br />
          Foto de test: Vauxford, MarcelX42, Matti Blume prin{" "}
          <a href="https://commons.wikimedia.org" className="underline">Wikimedia Commons</a>, licență CC BY-SA 4.0
        </div>
      </div>
    </footer>
  );
}
