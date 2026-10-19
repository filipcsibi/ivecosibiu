"use client";

import { useState } from "react";
import { formatEur } from "@/lib/stock";

function monthlyPayment(principal: number, annualRate: number, months: number) {
  if (principal <= 0 || months <= 0) return 0;
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

export default function FinanceCalculator() {
  const [price, setPrice] = useState(50000);
  const [downPct, setDownPct] = useState(20);
  const [months, setMonths] = useState(48);
  const [rate, setRate] = useState(6.5);

  const financed = price * (1 - downPct / 100);
  const rata = monthlyPayment(financed, rate, months);

  return (
    <div className="grid border border-line md:grid-cols-2">
      <div className="grid gap-5 p-6">
        <label className="grid gap-1 text-sm font-medium">
          Preț vehicul (EUR, fără TVA)
          <input type="number" min={5000} step={500} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="field" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Avans: {downPct}%
          <input type="range" min={0} max={50} step={5} value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} className="accent-[var(--brand)]" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Perioadă: {months} luni
          <input type="range" min={12} max={84} step={12} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="accent-[var(--brand)]" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Dobândă anuală (%) <span className="font-normal text-muted">orientativă</span>
          <input type="number" min={0} max={30} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="field" />
        </label>
      </div>

      <div className="flex flex-col justify-center bg-ink p-6 text-white">
        <p className="text-sm text-white/65">Rată lunară estimată</p>
        <p className="mt-1 text-5xl font-bold" aria-live="polite">{formatEur(rata)}</p>
        <dl className="mt-6 space-y-1 text-sm text-white/80">
          <div className="flex justify-between"><dt>Sumă finanțată</dt><dd>{formatEur(financed)}</dd></div>
          <div className="flex justify-between"><dt>Avans</dt><dd>{formatEur(price - financed)}</dd></div>
        </dl>
        <p className="mt-4 text-xs text-white/50">
          Calcul informativ, fără valoare contractuală. Oferta finală depinde de analiza de credit.
        </p>
      </div>
    </div>
  );
}
