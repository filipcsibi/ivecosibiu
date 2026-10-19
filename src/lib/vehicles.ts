export type VehicleSlug = "daily" | "eurocargo" | "s-way" | "x-way" | "t-way";

export type Vehicle = {
  slug: VehicleSlug;
  name: string;
  category: "Utilitare" | "Camioane";
  summary: string;
  mission: string;
  specs: { label: string; value: string }[];
  highlights: string[];
};

// Specificații orientative, de verificat cu fișele tehnice oficiale.
export const vehicles: Vehicle[] = [
  {
    slug: "daily",
    name: "Daily",
    category: "Utilitare",
    summary: "Furgon, șasiu cabină și autoutilitare pentru livrări urbane și regionale.",
    mission: "Livrări urbane și regionale",
    specs: [
      { label: "Masa totală", value: "3,5 – 7,2 t" },
      { label: "Motorizări", value: "Diesel, CNG, electric (eDaily)" },
      { label: "Cutie", value: "Manuală sau automată HI-MATIC" },
    ],
    highlights: ["Cadru de șasiu tip scară", "Versiuni furgon, basculantă, platformă", "Disponibil și 4×4"],
  },
  {
    slug: "eurocargo",
    name: "Eurocargo",
    category: "Camioane",
    summary: "Camionul mediu pentru distribuție, construcții și aplicații speciale.",
    mission: "Distribuție regională",
    specs: [
      { label: "Masa totală", value: "6 – 19 t" },
      { label: "Motorizări", value: "Diesel, gaz natural" },
      { label: "Cabine", value: "Zi, Zi lungă, Dormitor" },
    ],
    highlights: ["Gamă largă de ampatamente", "Pregătit pentru caroserii speciale", "Versiune 4×4"],
  },
  {
    slug: "s-way",
    name: "S-Way",
    category: "Camioane",
    summary: "Tractorul pentru transport pe distanțe lungi, orientat spre consum redus.",
    mission: "Transport pe distanțe lungi",
    specs: [
      { label: "Masa totală", value: "18 – 44 t" },
      { label: "Motorizări", value: "Diesel, gaz natural (LNG/CNG), electric (S-eWay)" },
      { label: "Cabine", value: "Zi, Dormitor, High Roof" },
    ],
    highlights: ["Cabină spațioasă pentru șofer", "Opțiuni cu gaz natural", "Conectivitate și diagnoză la distanță"],
  },
  {
    slug: "x-way",
    name: "X-Way",
    category: "Camioane",
    summary: "Camion pentru șantiere și drumuri dificile, cu tracțiune integrală disponibilă.",
    mission: "Construcții și teren dificil",
    specs: [
      { label: "Masa totală", value: "18 – 44 t" },
      { label: "Tracțiune", value: "4×2 până la 8×4, variante 6×6 și 8×8" },
      { label: "Utilizare", value: "Basculante, betonieră, macara" },
    ],
    highlights: ["Șasiu robust", "Garda la sol ridicată", "Pregătit pentru caroserii de șantier"],
  },
  {
    slug: "t-way",
    name: "T-Way",
    category: "Camioane",
    summary: "Camionul off-road greu pentru mine, cariere și aplicații extreme.",
    mission: "Off-road greu",
    specs: [
      { label: "Masa totală", value: "Până la 44 t" },
      { label: "Tracțiune", value: "6×4, 8×4, 6×6, 8×8" },
      { label: "Utilizare", value: "Cariere, mine, terenuri dificile" },
    ],
    highlights: ["Construcție pentru uz intens", "Variante cu tracțiune integrală", "Protecții suplimentare"],
  },
];

export const vehicleImage = (model: string) => `/images/${model.toLowerCase()}.jpg`;

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}
