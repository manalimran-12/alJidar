import HeaderSection from '@/Components/Header';
import TrustSection from '@/Components/Trust1';
import ContactSection from '@/Components/ContactForm';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeaderSection />
      <TrustSection />
      <ContactSection />
    </div>
  );
}
