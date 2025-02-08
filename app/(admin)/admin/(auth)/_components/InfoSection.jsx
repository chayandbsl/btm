import Logo from "../../../../../components/ui/logo";
import { SectionHead } from "./SectionHead";
import { TrustMetrics } from "./TrustMetrics";



export function InfoSection({ pageInfo }) {
  return (
    <section className="sm:flex flex-col items-center justify-center text-gray-600 p-8 md:w-1/2 lg:w-1/2 xl:w-2/5 space-y-8 hidden">
      <Logo />
      <SectionHead
        title={pageInfo.title}
        subTitle={pageInfo.subTitle}
        moto={pageInfo.moto}
      />
      <TrustMetrics />
    </section>
  );
}
