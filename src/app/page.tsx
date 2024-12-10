// app/page.tsx

import FeaturedSection from "./components/featured_section";
import FeaturedProducts from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import Navbar from "./components/Navbar";
import ShopexOffer from "./components/offer";
import TopHeader from "./components/top_header";


export default function Home() {
  return (
    <div>
      {/* Top Header */}
      <TopHeader />

      {/* Navbar */}
      <Navbar />

      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <FeaturedSection />

      {/* Sections Placeholder */}
      <main>
        <section id="hero-section">{/* Hero Section */}</section>
        <section id="feature-product">{/* Feature Product */}</section>
        <section id="latest-products">{/* Latest Products */}</section>
        <section id="shopex-offer">{/* What Shopex Offer! */}</section>
        <section id="unique-features">
          {/* Unique Features Of Latest & Trending Products */}
        </section>
        <section id="trending-products">{/* Trending Products */}</section>
        <section id="discount-item">{/* Discount Item */}</section>
        <section id="top-categories">{/* Top Categories */}</section>
        <section id="subscribe">{/* Subscribe Section */}</section>
        <section id="latest-blog">{/* Latest Blog */}</section>
      </main>

      {/* Footer */}
      <footer>{/* Footer Section */}</footer>
    </div>
  );
}
