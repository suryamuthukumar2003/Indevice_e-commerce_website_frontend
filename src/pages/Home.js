import React, { useEffect } from 'react'
import Header from '../components/home/Header';
import BannerCarousel from '../components/home/BannerCarousel';
import Footer from '../components/home/Footer';
import ProductCard from '../components/home/ProductCard';
import BrandCarousel from '../components/BrandCarousel';


function Home() {
  useEffect(()=>{
    document.title="Indevice-Home";
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
    <Header/>
    <BannerCarousel/>
    <ProductCard/>
    <BrandCarousel heading={"BRANDS"}/>
    <Footer/>
    </>
  )
}

export default Home;


