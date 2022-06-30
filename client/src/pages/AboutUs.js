import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/Footer.js";
import MainFeature1 from "components/features/FeaturesButtons.js";
import Features from "components/features/MainFeature2.js";
import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import styled from "styled-components";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

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

export default () => {

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="/">
      Home
    </NavLink>
    <NavLink href="/ContactUs">
      Contact
    </NavLink>
    <NavLink href="/dashboard">
      Dashboard
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
        description="We are a modern company adapted to the current requirements of the energy market, designed to help and develop economic companies that face difficulties in improving energy efficiency and reducing their carbon footprint"
        heading="We are a MODERN company"
        buttonRounded={false}
        primaryButtonText="Get in touch!"
        primaryButtonUrl = "/ContactUs"
        primaryButton2Text="Create an account!"
        primaryButton2Url="/signup"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        description="We are fighting for a cleaner and greener future where the environmental impact is significantly reduced. We promote innovative solutions to reduce the carbon footprint.
        We support all our partners in completing ESG (environmental, social, and corporate governance) and CDP (carbon disclosure project) statements."
        heading="For a sustainable FUTURE"
        buttonRounded={false}
        primaryButtonText="More about CDP here"
        primaryButton2Text="More about ESG here"
        primaryButton2Url = "https://www.esgportal.eu/"
        primaryButtonUrl = "https://www.cdp.net/en"
        imageSrc="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        textOnLeft={false}
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
      <Footer />
    </AnimationRevealPage>
  );
};
