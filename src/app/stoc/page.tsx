import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageTitle from "@/components/PageTitle";
import StockCard from "@/components/StockCard";
import { stock } from "@/lib/stock";

export const metadata: Metadata = { title: "Vehicule în stoc" };

async function StockList({ searchParams }: Pick<PageProps<"/stoc">, "searchParams">) {
  const { model, stare } = await searchParams;
  const m = typeof model === "string" ? model : undefined;
  const s = typeof stare === "string" ? stare : undefined;

  const items = stock.filter((i) => (!m || i.model === m) && (!s || i.condition === s));
  const models = [...new Set(stock.map((i) => i.model))];

  const chip = (active: boolean) =>
    `px-4 py-2 text-sm font-medium ${active ? "bg-brand text-white" : "bg-surface hover:bg-line"}`;
  const href = (next: { model?: string; stare?: string }) => {
    const p = new URLSearchParams();
    const nm = "model" in next ? next.model : m;
    const ns = "stare" in next ? next.stare : s;
    if (nm) p.set("model", nm);
    if (ns) p.set("stare", ns);
    const q = p.toString();
    return q ? `/stoc?${q}` : "/stoc";
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Link href={href({ model: undefined })} className={chip(!m)}>Toate modelele</Link>
        {models.map((x) => (
          <Link key={x} href={href({ model: x })} className={chip(m === x)}>{x}</Link>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Link href={href({ stare: undefined })} className={chip(!s)}>Nou și rulat</Link>
        <Link href={href({ stare: "Nou" })} className={chip(s === "Nou")}>Nou</Link>
        <Link href={href({ stare: "Rulat" })} className={chip(s === "Rulat")}>Rulat</Link>
      </div>

      {items.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StockCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted">Nu avem vehicule pentru filtrele alese. Încearcă alt model.</p>
      )}
    </>
  );
}

export default function StocPage(props: PageProps<"/stoc">) {
  return (
    <>
      <PageTitle title="Vehicule în stoc">Prețurile sunt fără TVA. Stoc demonstrativ.</PageTitle>
      <div className="container-page py-10">
        <Suspense fallback={<p className="text-muted">Se încarcă stocul…</p>}>
          <StockList searchParams={props.searchParams} />
        </Suspense>
      </div>
    </>
  );
}
