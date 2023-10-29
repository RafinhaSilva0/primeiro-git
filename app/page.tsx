import AlertSection from "@/componentes/AlertSection";
import CancelSection from "@/componentes/CancelSection";
import Depoiments from "@/componentes/Depoiments";
import Description from "@/componentes/Description";
import Footer from "@/componentes/Footer";
import FormSection from "@/componentes/FormSection";
import GraphSection from "@/componentes/GraphSection";
import GrowWithKing from "@/componentes/GrowWithKing";
import Header from "@/componentes/Header";
import Headline from "@/componentes/Headline";
import HowitWorksSection from "@/componentes/HowitWorksSection";
import ClientAnimation from "@/componentes/LottieAnimation/ClientAnimation";


export default function Home() {
  return(
  <>
    {""}
    <Header></Header>
    <Headline></Headline>
    <FormSection></FormSection>
    <GraphSection></GraphSection>
    <Description></Description>
    <HowitWorksSection></HowitWorksSection>
    <GrowWithKing></GrowWithKing>
    <Depoiments></Depoiments>
    <AlertSection></AlertSection>
    <CancelSection></CancelSection>
    <Footer></Footer>
    
    </> 
  ); 
}
