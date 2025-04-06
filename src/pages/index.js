import Footer from '@/components/footer';
import Header from '../components/header';
import Info from '@/components/info';
import Composition from '@/components/composition';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Info />

      <Composition />

      <Contact />

      <Footer />
    </div>
  );
}
