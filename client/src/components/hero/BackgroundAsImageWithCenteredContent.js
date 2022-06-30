import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
  `;

export default () => {

  const heading = "";

  const history = useHistory();

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}
   
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/AboutUs">
        Despre noi
      </NavLink>
      <NavLink href="/Pricing">
        Prețuri
      </NavLink>
      <NavLink href="/ContactUs">
        Contactează-ne
      </NavLink>
      <NavLink href="/#">
        NothingSoFar
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/logout"
       onClick={Logout}>
        Log Out!
      </PrimaryLink>
    </NavLinks>
  ];

  // const Action = ""

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
          <heading></heading>
          <br />
          </Heading>
          {/* <PrimaryAction>{Action}</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
