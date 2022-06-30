/* eslint-disable no-unused-vars */
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import styled from "styled-components";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {

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
      <FAQ
      faqs={[{question:"Am nevoie din punct de vedere legal de management energetic?", answer:"Conform legii 121/2014, operatorii economici sunt obligati să numească un manager energetic, atestat de Ministerul Energiei sau Autoritatea Națională de Reglementare în Domeniul Energiei, în termenul valabilității atestatului, conform legislației în vigoare, sau să încheie un contract de management energetic cu o persoană fizică atestată de Direcția eficiență energetică, care are statut de persoană fizică autorizată, sau cu o persoană juridică prestatoare de servicii energetice, atestată în condițiile legii"}, 
      {question:"Am nevoie din punct de vedere legal de audit energetic?", answer:"Conform legii 121/2014, operatorii economici sunt obligati să efectueze o dată la 4 ani un audit energetic pe un contur de consum energetic stabilit de operatorul economic, care să reprezinte cel puțin 50% din consumul energetic total al operatorului economic"},
      {question:"Cine poate sa efectueze servicii de audit si management energetic?", answer:"Serviciile de audit si management enrgetic pot fi efectuate NUMAI de catre operatori economici autorizati si atestati de catre Ministerul Energiei sau Autoritatea Natioanal de Reglementare in Domeniul Energiei cu personal specializat, autorizat si atestat conform legislatiei in vigoare"},
      {question:"Pot sa accesez fonduri europene nerambursabile fara efectuarea unui audit energetic recent?", answer:"In ghidurile de finantare este o cerinta obligatorie efectuarea unui audit energetic pentru a putea accesa fonduri europene nerambursabile de catre operatorii economici"}]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
