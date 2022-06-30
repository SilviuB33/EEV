/* eslint-disable no-unused-vars */
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default function (){

  const logoLinkUrl = "#"
  const illustrationImageSrc = illustration
  const headingText = "Sign In"

  const submitButtonText = "Sign In"
  const SubmitButtonIcon = LoginIcon
  const signupUrl = "/SignUp"

//   async function loginUser(event){
//     event.preventDefault()

//      const response = await fetch('http://localhost:1337/api/login',
//     {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })

//     const data = await response.json()

//   console.log(data)

//     if(data.user){
//       localStorage.setItem('token', data.user)
//       alert('Login successful!')
//       window.location.href ='/dashboard'
//     } else{
//       alert('Please check your username and password!')
//     }
    
//     console.log(data)
// }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin] = useState('');
  // const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:5000/login', {
              email: email,
              password: password,
          });
          Cookies.set('token', response.data.accessToken);
          Cookies.set('refreshToken', response.data.refreshToken);
          if (response.data.admin === true){
            history.push("/dashboardadm");
          }
          else {
          history.push("/dashboard");
          };
      } catch (error) {
          if (error.response) {
              // setMsg(error.response.data.msg);
          }
      }
  }

return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt=""/>
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign in with your e-mail</DividerText>
              </DividerTextContainer> */}
              <Form onSubmit={Auth}>
              {/* <p className="has-text-centered">{msg}</p> */}
                <Input 
                value={email}
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" />
                <Input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
                <SubmitButton type="submit"
                value="Sign In">
                <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
              {/* <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p> */}
              <p tw="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
)}