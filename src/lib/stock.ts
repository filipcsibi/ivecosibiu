export type StockItem = {
  id: string;
  model: string;
  title: string;
  condition: "Nou" | "Rulat";
  year: number;
  km: number;
  priceEur: number; // fără TVA
  monthlyEur?: number;
  immediate: boolean;
};

// Date DEMO: de înlocuit cu stocul real (JSON, CMS sau API).
export const stock: StockItem[] = [
  { id: "d-001", model: "Daily", title: "Daily 35S16 Furgon", condition: "Nou", year: 2025, km: 0, priceEur: 38900, monthlyEur: 520, immediate: true },
  { id: "d-002", model: "Daily", title: "Daily 70C18 Basculantă", condition: "Nou", year: 2025, km: 0, priceEur: 52400, monthlyEur: 690, immediate: false },
  { id: "e-001", model: "Eurocargo", title: "Eurocargo ML120E25 Platformă", condition: "Nou", year: 2025, km: 0, priceEur: 74900, monthlyEur: 980, immediate: true },
  { id: "e-002", model: "Eurocargo", title: "Eurocargo ML80E22 Frigorific", condition: "Rulat", year: 2021, km: 186000, priceEur: 41500, immediate: true },
  { id: "s-001", model: "S-Way", title: "S-Way AS440S49 Tractor", condition: "Nou", year: 2025, km: 0, priceEur: 98700, monthlyEur: 1290, immediate: false },
  { id: "x-001", model: "X-Way", title: "X-Way AD410X46 Basculantă", condition: "Rulat", year: 2022, km: 142000, priceEur: 79000, immediate: true },
];

export const formatEur = (n: number) =>
  new Intl.NumberFormat("ro-RO", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
