import HeaderSection from '@/Components/Header';
import TrustSection from '@/Components/Trust1';
import ContactSection from '@/Components/ContactForm';
import ProductAndQualitySection from '@/Components/productCard';
import QualitySection from '@/Components/qualitySections';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeaderSection />
      <TrustSection />
      <ProductAndQualitySection />
      <QualitySection/>
      <ContactSection />
    </div>
  );
}
