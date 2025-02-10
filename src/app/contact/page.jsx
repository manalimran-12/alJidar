import ContactHeader from '../../Components/ContactHeader';
import TrustSection from '@/Components/Trust1';
import ContactSection from '@/Components/ContactForm';
import ContactDetails from '@/Components/contactDetails';

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ContactHeader />
      <TrustSection />
      <ContactDetails />
      <ContactSection />
    </div>
  );
}
