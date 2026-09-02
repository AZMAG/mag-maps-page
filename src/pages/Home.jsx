import { useEffect } from 'react'
import { useDataStore } from "../stores/DataContext"

import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

import ContactUsModal from "../components/contact-us/ContactUsModal"
import ContactUsSuccess from "../components/contact-us/ContactUsSuccess"

import Cards from "../layout/cards/Cards";
import InfoGraphicHero from "../layout/heroes/InfoGraphicsHero";
// import BikeMapHero from "../layout/heroes/BikeMapHero";
import HeatReliefHero from "../layout/heroes/HeatReliefHero";



export default function Home() {
  const store = useDataStore()

  // Automatically hide toast after 3 seconds
  useEffect(() => {
    if (store.contactUsSuccessModalShow) {
      const timer = setTimeout(() => {
        store.setContactUsSuccessModalShow(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [store, store.contactUsSuccessModalShow]);

  return (
    <>
      <Header />
      <main className="flex grow flex-col">
        <HeatReliefHero />
        {/* <BikeMapHero /> */}
        <Cards />
        <InfoGraphicHero />

      </main>
      <Footer />
      <ContactUsModal />
      {store.contactUsSuccessModalShow && <ContactUsSuccess />}

    </>
  );
}
