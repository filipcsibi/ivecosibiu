import type { Metadata } from "next";
import FinanceCalculator from "@/components/FinanceCalculator";
import LeadForm from "@/components/LeadForm";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Finanțare" };

export default function FinantarePage() {
  return (
    <>
      <PageTitle title="Finanțare">Estimează rata pentru un vehicul nou sau rulat, apoi cere o ofertă.</PageTitle>

      <div className="container-page py-12">
        <FinanceCalculator />

        <section className="mt-14 max-w-2xl">
          <h2 className="text-2xl font-bold">Cere o ofertă de finanțare</h2>
          <div className="mt-6 border border-line p-6">
            <LeadForm defaultTopic="Finanțare" />
          </div>
        </section>
      </div>
    </>
  );
}
