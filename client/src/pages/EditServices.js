/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
// import Form from "components/forms/SimpleContactUs";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import axios from "axios";
import { Container as ContainerBase } from "components/misc/Layouts";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
// import Form from "components\forms\TwoColContactUsWithIllustrationFullForm.js"
// import Features from "components/features/ThreeColWithSideImage.js";
// import ServiceList from "routes/ServiceList";
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
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

const EditServices = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    useEffect(() => {
        getServiceById();
        refreshToken();
    }, []);
    
    const refreshToken = async () => {
      try {
          // // const decoded = jwt_decode(response.data.accessToken);
          // const token = Cookies.get("token");
          // const decoded = jwt_decode(token);
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
              // decoded = jwt_decode(response.data.accessToken);
          setName(decoded.name);
          setCompany(decoded.company);
          setEmail(decoded.email);
          setExpire(decoded.exp);
          setAdmin(decoded.admin);
          if (decoded.admin === false){
            history.push("/");
          }
        }
      }
      } catch (error) {
          if (error.response) {
              history.push("/");
          }
      }
    }
       const updateService = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/Services/${id}`,{
            title: title,
            price: price
        });
        alert("Service updated successfully!")
        history.push("/dashboardAdm");
    }
 
    const getServiceById = async () => {
        const response = await axios.get(`http://localhost:5000/Services/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

const submitButtonText = "Edit Item"

  return (
     
    <AnimationRevealPage>
      <Header />
      <MainContent>
      <Heading>Edit the item!</Heading>
      <FormContainer>
      <Form onSubmit={updateService}>
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
export default EditServices