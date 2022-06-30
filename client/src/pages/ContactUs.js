import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import styled from "styled-components";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {

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
      <ContactUsForm />
      <ContactDetails
      heading = "Brioul nostru"
      subheading = "Alte date de contact"
      description= "Ne poti gasi oricand la biroul nostru"
        cards={[
          {
            title: "Târgoviște",
            description: (
              <>
                <Address>
                  <AddressLine>Str. Col Ion Nicolin</AddressLine>
                  <AddressLine>Nr. 4, Bl. 54B, Scara B.</AddressLine>
                </Address>
                <Email>extronenergyvision@gmail.com</Email>
                <Phone>+40 0737031807</Phone>
              </>
            )
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
