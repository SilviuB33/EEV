import React from "react";
import tw from "twin.macro";
  // eslint-disable-next-line
import styled from "styled-components"; 
import LogoImage from "../../images/logo.svg";
const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;
const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;
const ColumnHeading = tw.h5`font-bold`;
const LinkList = tw.ul`mt-1 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;
const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Extron Energy Vision</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Extron Energy Vision is an Energy Services company providing a variety of energy services.
          </CompanyDescription>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/AboutUs">About</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/Faq">FAQs</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/ContactUs">Contact</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/login">Log In</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/signup">Sign Up</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/">Home Page</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
        <ColumnHeading>Legal</ColumnHeading>
        <LinkList>
          <LinkListItem>
          <Link href="/TermsOfService">Terms of Service</Link>
          </LinkListItem>
        </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
