import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { About } from './components/About';
import { Calendar } from './components/Calendar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <About />
        <Calendar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}