// app/page.tsx

import Image from "next/image";
import DiscountItem from "./components/discount_items";
import FeaturedSection from "./components/featured_section";
import FeaturedProducts from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import Navbar from "./components/Navbar";
import ShopexOffer from "./components/offer";
import SubscribeSection from "./components/subscribe";
import TopCategories from "./components/top_categories";
import TopHeader from "./components/top_header";
import TrendingProducts from "./components/trending_products";
import sponserImage from "@/app/assets/sponserimage.png";
import LatestBlogSection from "./components/LatestBlogSection";
import Footer from "./components/Footer";
import ExtremeFooter from "./components/extreme_footer";



export default function Home() {
  return (
    <div>


      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <FeaturedSection />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <SubscribeSection />

      <div className="w-auto justify-center items-center mx-8">

        <Image className=""
          src={sponserImage}
          alt="sponser image"
          width={1000}
        />
      </div>
      <LatestBlogSection />


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
