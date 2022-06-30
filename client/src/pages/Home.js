import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/Hero.js";
import Features from "components/features/MainFeature2.js";
import MainFeature from "components/features/MainFeature.js";
import FeatureStats from "components/features/FeatureStats.js";
import FAQ from "components/faqs/FAQs1.js";
import Footer from "components/footers/Footer.js";
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
      heading = "Energy services tailored to your needs!"
      features = {["Energy specialists", "Quality services", "Prices adapted to the requirements"]}
      description = "Extron Energy vision resorts on the experience of its professionals to considerably improve the safety and energy security of your company!"
      imageSrc = "https://alger.mae.ro/sites/alger.mae.ro/files/images/img_20170427_131223.jpg"
      primaryButtonUrl = "/ContactUs"
      primaryButtonText = "Contact us!"
      testimonial={{
      quote:"Together with the EEV team, I managed to keep the company in the top of the successful companies!.", 
      customerName:"Jean Drugescu", 
      customerCompany:"Metaplast SA"
      }}
      />
      <FeatureStats
      heading = "We have qualified employees certified, by the Romanian Ministry of Energy!"
      description= "Our employees are qualified for the job they perform and show tenacity and experience."
      stats={[{key:"Management", value:"Energy"}, {key:"Audit", value:"Complex"}, {key:"Engineering", value:"Design"}]}
      />
      <Features 
        heading={<>Atributes <HighlightedText> qualitative</HighlightedText></>}
        subheading= "What defines us"
        description= "All of our partners benefit from "
        cards={[
        {imageSrc:ShieldIconImage,
          title:"Safety",
         description: "We ensure the energy security of your business"},
        {imageSrc: SupportIconImage,
        title: "24/7 Support" ,
          description: "We are always available to our partners"},
        {imageSrc: CustomizeIconImage,
          title: "Customizable", 
          description: "Services tailored to the needs of the company"},
        {imageSrc: FastIconImage,
        title: "Trustworthy", 
        description: "We want long-term partnerships with our partners"},
        {imageSrc: ReliableIconImage,
        title: "Fast", 
        description: "Prompt and quality interventions"},
        {imageSrc:SimpleIconImage,
        title: "Easy", 
        description: "Effective communication at high standards"}
        ]}
      />
      <MainFeature
        subheading="Our expertise"
        heading={<>Made by and for  <HighlightedText>Professionals</HighlightedText></>}
        description="The team members are certified specialists, authorized by ME (Ministry of Energy) and ANRE (National Authority for Energy Regulation) with internal and EUROPEAN recognition"
        features={[{
          Icon: BriefcaseIcon,
          title:"professionalism",
          description:"Among the best professionals in the country",},
          {
          Icon:MoneyIcon,
          title:"Affordable",
          description:"Quality at affordable prices"
          }]}
      />
      <FAQ
      subheading = "Frequently Asked Questions"
      // heading = "You have Questions ?"
      description = "We got the answers to your questions"
      heading={<>Got <HighlightedText>Questions?</HighlightedText></>}
      faqs={[{question:"Legally, do I need energy management?", answer:"According to law 121/2014, economic operators are obliged to appoint an energy manager, certified by the Ministry of Energy or the National Regulatory Authority in the Field of Energy, within the term of validity of the attestation, according to the legislation in force, or to conclude an energy management contract with an individual certified by the Energy efficiency Directorate, who has the status of an authorized individual person, or with a legal entity providing energy services, certified under the law"}, 
      {question:"Legally, do I need an energy audit?", answer:"According to law 121/2014, economic operators are obliged to conduct an energy audit every 4 years on an energy consumption contour established by the economic operator, representing at least 50% of the total energy consumption of the economic operator"},
      {question:"Who can perform energy management and audit services?", answer:"Audit and management services can be performed ONLY by economic operators authorized and certified by the Ministry of Energy or the National Energy Regulatory Authority with specialized personnel, authorized and certified according to the legislation in force"},
      {question:"Can I access non-reimbursable European funds without conducting a recent energy audit?", answer:"In the financing guides, it is a mandatory requirement to conduct an energy audit in order to be able to access non-reimbursable European funds"}]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
