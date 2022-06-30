/* eslint-disable no-unused-vars */
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

  export default function (){

  const logoLinkUrl = "#"
  const illustrationImageSrc = illustration
  const headingText = "Sign Up"
   //socialButtons = [
    //  {
    //    iconImageSrc: googleIconImageSrc,
    //    text: "Sign Up With Google",
    //    url: "https://google.com"
    //  },
    //  {
    //    iconImageSrc: twitterIconImageSrc,
    //    text: "Sign Up With Twitter",
    //    url: "https://twitter.com"
    //  }
    //],
  const submitButtonText = "Sign Up"
  const SubmitButtonIcon = SignUpIcon
  const tosUrl = "#"
  const privacyPolicyUrl = "#"
  const signInUrl = "/login"  

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [company, setCompany] = useState('')
  // const [password, setPassword] = useState('')
  // const history = useHistory()



//   async function registerUser(event){
//     event.preventDefault()

//     const response = await fetch('http://localhost:1337/api/register',
//     {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         company,
//         password,
//       }),
//     })

//     const data = await response.json()

//     if(data.status === 'ok'){
//       history.push('/login')
//     }
// }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  // const [msg, setMsg] = useState('');
  const history = useHistory();

  const Register = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/users', {
              name: name,
              email: email,
              company : company,
              password: password,
              confPassword: confPassword
          });
          history.push("/login");
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
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}
              {/* <DividerTextContainer>
                <DividerText>Or Sign up with your e-mail</DividerText>
              </DividerTextContainer> */}
              <Form onSubmit={Register}>
              {/* <p className="has-text-centered">{msg}</p> */}
              <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="Name" />
                 <Input 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text" 
                placeholder="Company Name" />
                <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" />
                <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
                <Input
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="Verify Password" />
                <SubmitButton 
                type="submit"
                value="Register">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Extron Energy Vision's{" "}
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                    Sign In
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
}
