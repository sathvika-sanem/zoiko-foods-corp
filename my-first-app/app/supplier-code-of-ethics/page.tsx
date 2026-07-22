import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PolicyHighlights from "./components/PolicyHighlights";
import CorePrinciples from "./components/CorePrinciples";
import RegionalEnforcement from "./components/RegionalEnforcement";
import SupplierResponsibilities from "./components/SupplierResponsibilities";
import EnforcementCompliance from "./components/EnforcementCompliance";
import CaseApplications from "./components/CaseApplications";
import CertificationsVerification from "./components/CertificationsVerification";
import SupplierComplianceForm from "./components/SupplierComplianceForm";
import ClosingStatement from "./components/ClosingStatement";

export default function SupplierCodeOfEthicsPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <PolicyHighlights />
        <CorePrinciples />
        <RegionalEnforcement />
        <SupplierResponsibilities />
        <EnforcementCompliance />
        <CaseApplications />
        <CertificationsVerification />
        <ClosingStatement />
        <SupplierComplianceForm />
      </main>

      <Footer />
    </>
  );
}