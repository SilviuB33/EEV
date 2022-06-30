/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/Footer.js";
import Features from "components/features/FeatureDashboard.js";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router-dom";
import { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import Cookies from "js-cookie";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const FormContainer2 = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  ${'' /* h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  } */}
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};
    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const SubmitButton = styled.button`;
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input2 = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
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
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const Dashboard = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [admin, setAdmin] = useState('');
  const [users, setUsers] = useState([]);
  const [service, setService] = useState('');
  const [month, setMonth] = useState('');
  const [consumption, setConsumption] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
      refreshToken();
      getUsers();
  }, []);

  const refreshToken = async () => {
      try {
          const token = Cookies.get("token");
          if (!token) {
            history.push("/login");
            alert('You need to be logged in!');
          } else {
            const decoded = jwt_decode(token);
            // check if token is expired 
            if (decoded.exp < new Date().getTime()) {
              const response = await axios.get('http://localhost:5000/token');
              setToken(response.data.accessToken);
              Cookies.set("token", response.data.accessToken);
            }
            setName(decoded.name);
            setCompany(decoded.company);
            setEmail(decoded.email);
            setExpire(decoded.exp);
            setAdmin(decoded.admin);
          }
      } catch (error) {
          if (error.response) {
              history.push("/");
          }
      }
  }

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

const saveMessage = async (e) => {
  e.preventDefault();
  await axios.post('http://localhost:5000/messagesloggedin',{
    user_company: company,
    user_name: 	name,
      subject: subject,
      message: message,
  });
  alert('Message submited successfully!')
  history.push("/dashboard");
}

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get('http://localhost:5000/token');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.name);
          setCompany(decoded.company);
          setEmail(decoded.email);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  const getUsers = async () => {
      const response = axiosJWT.get('http://localhost:5000/users', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      setUsers(response.data);
  }

  const saveRaport = async (e) => {
      e.preventDefault();
      
      await axios.post('http://localhost:5000/raports',{
          month: month,
          consumption: consumption,
          user_name: name,
          user_company: company,
      });
      alert('Raport submited successfully')
      history.push("/dashboard");
  }

const submitButtonText = "Add Consumption"

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
      <NavLink href="/faq">
        FAQs
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/logout"
       onClick={Logout}>
        Log Out!
      </PrimaryLink>
    </NavLinks>
  ];

return (
     
     <AnimationRevealPage>
      <HeroContainer links={navLinks}>
        <StyledHeader links={navLinks} />
        </HeroContainer>
      <Features
        subheading={<Subheading>Hello</Subheading>}
        heading= {<Heading>Welcome Back, {name} !</Heading>}
        description="We have missed you!"
      />
      <MainContent>
      <Heading>Submit your monthly consumption MWh!</Heading>
      <FormContainer>
      <Form onSubmit={saveRaport}>
                <Input 
                type = "hidden"
                name = "user_id"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <Input 
                type = "hidden"
                name = "user_company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}/>
                <Input 
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                type="text" 
                placeholder="Month" />
                 <Input 
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                type="number" 
                min="0"
                placeholder="Consumption" />
                <SubmitButton 
                type="submit"
                value="Send">
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
            </FormContainer>
        </MainContent>
       <Container>
      <Content>
        <FormContainer2>
          <div tw="mx-auto max-w-4xl">
            <Heading>Want to leave us a message?</Heading>
            <form onSubmit = {saveMessage} >
              <TwoColumn>
                <Column>
                  <InputContainer>
                  <Input 
                type = "hidden"
                name = "user_id"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <Input 
                type = "hidden"
                name = "user_company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}/>
                    <Label htmlFor="name-input">Title</Label>
                    <Input2 id="name-input" type="text" name="subject" placeholder="E.g. Subject" value = {subject} onChange={ (e) => setSubject(e.target.value)} />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea id="message-input" name="message" placeholder="E.g. Details about your inquiries" value = {message} onChange={ (e)=>setMessage(e.target.value)} />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
        </FormContainer2>
      </Content>
    </Container>
      <Footer />
    </AnimationRevealPage>
  );
}
export default Dashboard