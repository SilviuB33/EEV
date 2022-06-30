import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Header from "components/headers/light.js";
import { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import Footer from "components/footers/Footer.js";
// import Form from "components/forms/SimpleContactUs";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
// import Form from "components\forms\TwoColContactUsWithIllustrationFullForm.js"
// import Features from "components/features/ThreeColWithSideImage.js";
// import ServiceList from "routes/ServiceList";
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
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
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const submitButtonText = "Add Item";


const AddService = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState('');

  const history = useHistory();

  useEffect(() => {
    refreshToken();
},);

  const refreshToken = async () => {
    try {
        const token = Cookies.get("token");
        if (!token) {
          history.push("/");
        } else {
          const decoded = jwt_decode(token);
          // check if token is expired 
          if (decoded.exp < new Date().getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            Cookies.set("token", response.data.accessToken);
          
        setName(decoded.name);
        setCompany(decoded.company);
        setEmail(decoded.email);
        setExpire(decoded.exp);
        setAdmin(decoded.admin);
        if (decoded.admin === true){
          history.push("/addservices");
        }
        else{
          history.push("/")
        };
      }
    }
  } catch (error) {
        if (error.response) {
            history.push("/");
        }
    }
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
          setExpire(decoded.exp);
          setAdmin(decoded.admin);
          if (decoded.admin === false){
            history.push("/");
          }
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  const saveService = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000/Services',{
          title: title,
          price: price
      });
      history.push("/dashboardAdm");
      alert('Service added successfully')
  }

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
      <NavLink href="/DashboardAdm">
        Dashboard
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
      <MainContent>
      <Heading>Add a Service!</Heading>
      <FormContainer>
      <Form onSubmit={saveService}>
                <Input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                placeholder="Title" />
                 <Input 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text" 
                placeholder="Price" />
                <SubmitButton 
                type="submit"
                value="Send">
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
            </FormContainer>
            </MainContent>
            <br/>
      <Footer />
    </AnimationRevealPage>
  );
}
export default AddService