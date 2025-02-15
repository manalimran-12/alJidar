import HeaderSection from '@/Components/Header';
import TrustSection from '@/Components/Trust1';
import ContactSection from '@/Components/ContactForm';
import ProductAndQualitySection from '@/Components/productCard';
import QualitySection from '@/Components/qualitySections';
import ProductDetails from '@/Components/HomeProduct';
import data from '@/public/data';
import VisionMission from '@/Components/VisionComponent';
import WarehouseSupplySection from '@/Components/Warehouse';
import Footer from '@/Components/footer';
export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeaderSection />
      <TrustSection />
      <ProductAndQualitySection />
      <QualitySection />
      <VisionMission/>
      <ProductDetails product={data.productDetails} />
      <WarehouseSupplySection/>
      <ContactSection bgColor={"yellow"}/>
      <Footer/>
    </div>
  );
}
