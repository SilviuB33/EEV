// import React from "react";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Header from "components/headers/light.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
// import Footer from "components/footers/Footer.js";
// import FAQ from "components/faqs/FAQs1.js";
// import { NavLink, NavLinks, PrimaryLink as LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
// import styled from "styled-components";
// import tw from "twin.macro";

// export default () => {

//   const StyledHeader = styled(Header)`
//     ${tw`pt-8 max-w-none w-full`}
//     ${DesktopNavLinks} {
//       ${tw`text-white hover:border-blue-300 hover:text-white`}
//     }
//     $ ${NavLink}, ${LogoLink} {
//       ${tw`text-blue-800 hover:border-blue-300 hover:text-blue-800`}
//     }
//     ${NavToggle}.closed {
//       ${tw`text-blue-800 hover:text-primary-700`}
//     }
//   `;
//   const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
  
//   const navLinks = [
//     <NavLinks key={1}>
//       <NavLink href="/">
//         Home
//       </NavLink>
//       <NavLink href="/AboutUs">
//         Despre noi
//       </NavLink>
//       <NavLink href="/Pricing">
//         Prețuri
//       </NavLink>
//       <NavLink href="/ContactUs">
//         Contactează-ne
//       </NavLink>
//       <NavLink href="/faq">
//         FAQs
//       </NavLink>
//     </NavLinks>,
//     <NavLinks key={2}>
//     </NavLinks>
//   ];
  
//   return (
//     <AnimationRevealPage>
// <HeroContainer links={navLinks}>
//         <StyledHeader links={navLinks} />
//         </HeroContainer>
//         <Pricing />
//       <FAQ />
//       <Footer/>
//     </AnimationRevealPage>
//   );
// };
