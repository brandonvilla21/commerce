import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroCarousel from 'components/hero-carousel';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance e-commerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
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
