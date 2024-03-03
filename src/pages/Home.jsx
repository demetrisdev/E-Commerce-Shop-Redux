import Header from "../components/Header";
import BioLaden from "../components/BioLaden";
import ProductionBlock from "../components/ProductionBlock";
import AppBlock from "../components/AppBlock";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
        <Header/>
        <BioLaden />
        <ProductionBlock />
        <AppBlock />
        <Footer />
    </>
  );
}
