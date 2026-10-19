import Image from "next/image";
import Link from "next/link";
import { formatEur, type StockItem } from "@/lib/stock";
import { vehicleImage } from "@/lib/vehicles";

export default function StockCard({ item }: { item: StockItem }) {
  return (
    <article className="flex h-full flex-col bg-white">
      <div className="photo relative aspect-[16/10] overflow-hidden">
        <Image src={vehicleImage(item.model)} alt={`IVECO ${item.model}`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        {item.immediate && (
          <span className="glass glass-red absolute left-3 top-3 px-3 py-1 text-xs font-semibold">
            Livrare imediată
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>{item.condition}</span>
          <span>
            {item.year}
            {item.km > 0 && ` · ${item.km.toLocaleString("ro-RO")} km`}
          </span>
        </div>
        <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
        <p className="mt-3 text-2xl font-bold">
          {formatEur(item.priceEur)} <span className="text-sm font-normal text-muted">fără TVA</span>
        </p>
        {item.monthlyEur && <p className="mb-5 text-sm text-muted">sau de la {formatEur(item.monthlyEur)}/lună în leasing</p>}
        <Link href={`/contact?vehicul=${encodeURIComponent(item.title)}`} className="btn btn-primary mt-auto">
          Cere ofertă
        </Link>
      </div>
    </article>
  );
}
