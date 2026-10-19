// Date de contact PLACEHOLDER: de înlocuit cu cele reale înainte de lansare.
export const site = {
  name: "IVECO Sibiu",
  tagline: "Vehicule comerciale IVECO: vânzări, service și piese",
  phone: "+40 269 000 000",
  phoneHref: "tel:+40269000000",
  email: "contact@ivecosibiu.example",
  address: "Șelimbăr, jud. Sibiu",
  schedule: [
    { days: "Luni – Vineri", hours: "08:00 – 18:00" },
    { days: "Sâmbătă", hours: "09:00 – 13:00" },
    { days: "Duminică", hours: "Închis" },
  ],
} as const;

export const nav = [
  { href: "/vehicule", label: "Vehicule" },
  { href: "/stoc", label: "Stoc" },
  { href: "/service", label: "Service și piese" },
  { href: "/finantare", label: "Finanțare" },
  { href: "/contact", label: "Contact" },
] as const;
