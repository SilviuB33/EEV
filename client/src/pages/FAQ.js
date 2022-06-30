/* eslint-disable no-unused-vars */
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/Footer.js";
import FAQ from "components/faqs/FAQs2.js";
import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import styled from "styled-components";

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
    <NavLink href="/AboutUs">
      About
    </NavLink>
    <NavLink href="/ContactUs">
      Contact
    </NavLink>
    <NavLink href="/dashboard">
      Dashboard
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
      description="Here are some of the most frequently asked questions that we receive and the answer to them. If you have any more questions you can contact us and we will surely answer them!"
       faqs={[{question:"Legally, do I need energy management?", answer:"According to law 121/2014, economic operators are obliged to appoint an energy manager, certified by the Ministry of Energy or the National Regulatory Authority in the Field of Energy, within the term of validity of the attestation, according to the legislation in force, or to conclude an energy management contract with an individual certified by the Energy efficiency Directorate, who has the status of an authorized individual person, or with a legal entity providing energy services, certified under the law"}, 
      {question:"Legally, do I need an energy audit?", answer:"According to law 121/2014, economic operators are obliged to conduct an energy audit every 4 years on an energy consumption contour established by the economic operator, representing at least 50% of the total energy consumption of the economic operator"},
      {question:"Who can perform energy management and audit services?", answer:"Audit and management services can be performed ONLY by economic operators authorized and certified by the Ministry of Energy or the National Energy Regulatory Authority with specialized personnel, authorized and certified according to the legislation in force"},
      {question:"Can I access non-reimbursable European funds without conducting a recent energy audit?", answer:"In the financing guides, it is a mandatory requirement to conduct an energy audit in order to be able to access non-reimbursable European funds"}]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
