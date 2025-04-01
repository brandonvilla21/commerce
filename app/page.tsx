import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import HeroCarousel from "components/hero-carousel";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "SuplementaMX es una tienda de suplementos deportivos online. Ofrecemos una amplia variedad de productos de alta calidad para mejorar tu rendimiento y tu salud.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
