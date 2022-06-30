import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero 
      features = {["Specialiști în domeniul energetic", "Servicii de calitate", "Prețuri adaptate cerințelor"]}
      heading = "Servicii energetice personalizate nevoilor tale!"
      description = "Extron Energy Vision se bazează pe experiența profesioniștilor săi pentru a îmbunătăți considerabil siguranța și securitatea energetică a societății tale!"
      imageSrc = "https://alger.mae.ro/sites/alger.mae.ro/files/images/img_20170427_131223.jpg"
      primaryButtonUrl = "/ContactUs"
      primaryButtonText = "Contactează-ne!"
      testimonial={{
      quote:"Alături de echipa EEV am reușit să mențin compania în topul societăților de succes.", 
      customerName:"Jean Drugescu", 
      customerCompany:"Metaplast SA"
      }}
      />
      <FeatureStats
      heading = "Avem angajați calificati si certificati de Ministerul Energiei din Romania!"
      description= "Angajatii nostri sunt calificati pentru job-ul pe care il presteaza si dau dovada de tenacitate si de multa experienta."
      stats={[{key:"energetic", value:"Management"}, {key:"complex", value:"Audit"}, {key:"proiectare", value:"Inginerie"}]}
      />
      <Features 
        heading={<>Atribute <HighlightedText> calitative</HighlightedText></>}
        subheading= "Ce ne definește"
        description= "Toți partenerii noștrii beneficiază de "
        cards={[
        {imageSrc:ShieldIconImage,
          title:"Siguranță",
         description: "Asigurăm securitatea energetică a afacerii tale"},
        {imageSrc: SupportIconImage,
        title: "24/7 Support" ,
          description: "Suntem întotdeauna la dispoziția clientului"},
        {imageSrc: CustomizeIconImage,
          title: "Customizable", 
          description: "Servicii personalizate neovilor companiei"},
        {imageSrc: FastIconImage,
        title: "De încredere", 
        description: "Dorim parteneriate pe termen lung alături de clienții noștri."},
        {imageSrc: ReliableIconImage,
        title: "Fast", 
        description: "Intervenții prompte și de calitate"},
        {imageSrc:SimpleIconImage,
        title: "Easy", 
        description: "Comunicare eficientă și la standarde înalte"}
        ]}
      />
      <MainFeature
        subheading="Expertiza noastră"
        heading={<>Facut de si pentru <HighlightedText>Profesioniști</HighlightedText></>}
        description="Membrii echipei sunt specialisti atestati, autorizati de ME (Ministerul Energiei) si ANRE (Autoritatea Nationala de Reglementare In Domeniul Energiei) cu recunoastere interna si EUROPEANA"
        features={[{
          Icon: BriefcaseIcon,
          title:"Profesionism",
          description:"Printre cei mai buni profesionisti din tara",},
          {
          Icon:MoneyIcon,
          title:"Affordable",
          description:"Calitate la preturi accesibile"
          }]}
      />
      {/* <Pricing 
        subheading = "Prețuri adaptate in functie de cerinte si nevoi"
        heading={<>Planuri <HighlightedText>Flexibile</HighlightedText></>}
        description="*Prețurile sunt estimative"
      /> */}
      <FAQ
        heading={<>Aveti <HighlightedText>Intrebari ?</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
