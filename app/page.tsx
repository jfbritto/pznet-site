import { CookieNotice } from "@/components/pznet/cookie-notice";
import { PznetCoverage } from "@/components/pznet/coverage";
import { PznetFaq } from "@/components/pznet/faq";
import { PznetFeatures } from "@/components/pznet/features";
import { PznetFooter } from "@/components/pznet/footer";
import { PznetHero } from "@/components/pznet/hero";
import { PznetNav } from "@/components/pznet/nav";
import { PznetPlanFinder } from "@/components/pznet/plan-finder";
import { PznetPlans } from "@/components/pznet/plans";
import { PznetSupport } from "@/components/pznet/support";
import { PznetFloat } from "@/components/pznet/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PznetNav />
      <main>
        <PznetHero />
        <PznetPlans />
        <PznetPlanFinder />
        <PznetFeatures />
        <PznetCoverage />
        <PznetSupport />
        <PznetFaq />
      </main>
      <PznetFooter />
      <PznetFloat />
      <CookieNotice />
    </div>
  );
}
