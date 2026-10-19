import type { ReactNode } from "react";

export default function PageTitle({ title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-surface">
      <div className="container-page py-12 sm:py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {children && <p className="mt-3 max-w-2xl text-lg text-muted">{children}</p>}
      </div>
    </section>
  );
}
