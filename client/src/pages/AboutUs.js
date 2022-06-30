import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColWithSideImage.js";
import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import styled from "styled-components";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

export default () => {

const HighlightedText = tw.span`text-primary-500`
const Subheading = tw.span`uppercase tracking-wider text-sm`;
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} {
    ${tw`text-white hover:border-blue-300 hover:text-white`}
  }
  $ ${NavLink}, ${LogoLink} {
    ${tw`text-blue-800 hover:border-blue-300 hover:text-blue-800`}
  }
  ${NavToggle}.closed {
    ${tw`text-blue-800 hover:text-primary-700`}
  }
`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/">
      Home
    </NavLink>
    <NavLink href="/AboutUs">
      Despre noi
    </NavLink>
    {/* <NavLink href="/Pricing">
      Prețuri
    </NavLink> */}
    <NavLink href="/ContactUs">
      Contactează-ne
    </NavLink>
    <NavLink href="/faq">
      FAQs
    </NavLink>
  </NavLinks>,
  <NavLinks key={2}>
  </NavLinks>
];

  return (
    <AnimationRevealPage>
      <HeroContainer links={navLinks}>
        <StyledHeader links={navLinks} />
        </HeroContainer>
      <MainFeature1
        subheading={<Subheading>About Extron</Subheading>}
        description="Suntem o firma tanara adaptata cerintelor curente pe piata energiei, menita sa ajute si sa dezvolte societati economice care se confrunta cu dificultati in imbunatatirea eficientei energetice si reducerea amprentei de carbon"
        heading="Suntem o firma TANARA"
        buttonRounded={false}
        primaryButtonText="Get in touch!"
        primaryButtonUrl = "/ContactUs"
        primaryButton2Text="Create an account!"
        primaryButton2Url="/signup"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        description="Luptam pentru un viitor mai curat si verde, in care impactul asupra mediului este redus semnificativ. Promovam solutii inovatoare pentru reducerea amprentei de carbon.
        Sprijinim toti partenerii nostri in completarea declaratiilor de tip ESG (Environmental, social, and corporate governance) si CDP (Carbon Disclosure Project)"
        heading="Pentru un viitor SUSTENABIL"
        buttonRounded={false}
        primaryButtonText="More about CDP here"
        primaryButton2Text="More about ESG here"
        primaryButton2Url = "https://www.esgportal.eu/"
        primaryButtonUrl = "https://www.cdp.net/en"
        imageSrc="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        textOnLeft={false}
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
      <Footer />
    </AnimationRevealPage>
  );
};
