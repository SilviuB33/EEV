/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/Footer.js";
import Features from "components/features/FeatureDashboard.js";
import { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

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
const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

const DashboardAdm = () => {

  const [users, setUsers] = useState([]);
  const [Messages, setMessages] = useState([]);
  const [MessagesLoggedIn, setMessagesLoggedIn] = useState([]);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [Raports, setRaport] = useState([]);
  const [expire, setExpire] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState('');
  const [Services, setService] = useState([]);
  const [userWithNameAndId, setUsersWithNameAndId] = useState([]);
  const [servicesWithNameAndId, setServicesWithNameAndId] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getUsers();
    getRaports();
    getMessages();
    getMessagesLoggedIn();
    getServices();
    getUserNameandId();
    getServiceNameandId();
}, []);

const handleUserSelection = (e) => {
  setSelectedUser(e.target.value);
};

const handleServiceSelection = (e) => {
  setSelectedService(e.target.value);
};

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
        }
      setName(decoded.name);
      setCompany(decoded.company);
      setEmail(decoded.email);
      setExpire(decoded.exp);
      setAdmin(decoded.admin);
      if (decoded.admin === true){
        history.push("/dashboardAdm");
      }
      else{
        history.push("/dashboard")
      };
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
        if (decoded.service === null){
          decoded.service="None";
        }
        if (decoded.admin === true){
          history.push("/dashboardAdm");
        }
        else{
          history.push("/dashboard")
        };
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const getUserNameandId = async () => {
  try {
  const response = await axiosJWT.get('http://localhost:5000/userswithnameandid', {
    headers: {
        Authorization: `Bearer ${token}`
    }
  });
  setUsersWithNameAndId(response.data);
}
catch (error) {
  console.log(error);
}
}

const getServiceNameandId = async () => {
  try {
  const response = await axiosJWT.get('http://localhost:5000/serviceswithnameandid', {
    headers: {
        Authorization: `Bearer ${token}`
    }
  });
  setServicesWithNameAndId(response.data);
}
catch (error) {
  console.log(error);
}
}

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/userswithservices', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setUsers(response.data);
}
const Logout = async () => {
  try {
      await axios.delete('http://localhost:5000/logout');
      history.push("/");
  } catch (error) {
      console.log(error);
  }
}

  const getMessages = async () => {
    const response = await axios.get('http://localhost:5000/messages');
    setMessages(response.data);
  }

  const deleteMessages = async (id) => {
    await axios.delete(`http://localhost:5000/messages/${id}`);
    getMessages();
    alert("Message Deleted Successfully!");
    history.push("/dashboardAdm");
  }

  const getMessagesLoggedIn = async () => {
    const response = await axios.get('http://localhost:5000/messagesloggedin');
    setMessagesLoggedIn(response.data);
  }

  const deleteMessagesLoggedIn = async (id) => {
    await axios.delete(`http://localhost:5000/messagesloggedin/${id}`);
    getMessagesLoggedIn();
    alert("Message Deleted Successfully!");
    history.push("/dashboardAdm");
  }

  const getRaports = async () => {
      const response = await axios.get('http://localhost:5000/Raports');
      setRaport(response.data);
  }

  const deleteRaport = async (id) => {
      await axios.delete(`http://localhost:5000/Raports/${id}`);
      getRaports();
  }
  
  const getServices = async () => {
      const response = await axios.get('http://localhost:5000/Services');
      setService(response.data);
  }
  
  const deleteService = async (id) => {
      await axios.delete(`http://localhost:5000/Services/${id}`);
      getServices();
  }

  const updateUserService = async (userId, serviceId) => {
    if (userId && serviceId) {
      const response = await axios.post('http://localhost:5000/updateuserservice', {
        service: serviceId,
        user: userId,
      });
      history.push("/dashboardAdm");
      alert("User updated successfully!");
      getUserNameandId();
      getServiceNameandId();
      setSelectedUser();
      setSelectedService();
    }      
  }

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/AddServices">
        Add a new service
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
     <br/>
     <br/>
            <Features
        subheading={<Subheading>We have the following clients</Subheading>}
        heading="Clients"
    />
       <Content>
       <Table striped bordered hover>
   <thead>
   <tr>
       <th>#</th>
       <th>Name</th>
       <th>Email</th>
       <th>Company</th>
       <th>Service</th>
 </tr>
   </thead>
   <tbody>
                     { users.map((users, index) => (
                         <tr key={ users.id}>
                             <td>{ index + 1 }</td>
                             <td>{ users.name }</td>
                             <td>{ users.email }</td>
                             <td>{ users.company }</td>
                             <td>{ users.service }</td>
                         </tr>
                     )) }
                 </tbody>
             </Table>
         </Content>
         <Features
        subheading={<Subheading>We have the following clients with services</Subheading>}
        heading="Change the client service"
    />
    <select className="form-select" aria-label="Default select example" value={selectedUser} onChange={handleUserSelection}>
    <option value>Please select a client</option>
    { userWithNameAndId.map((user, index) => (
      <option
    key = {user.id} value= {user.id}> {user.name} 
    </option>  
    ))}
</select>
<br>
</br>
<select className="form-select" aria-label="Default select example" value={selectedService} onChange={handleServiceSelection}>
<option value>Please select a service</option>
    { servicesWithNameAndId.map((service, index) => (
      <option
    key = {service.id} value= {service.id}> {service.title} 
    </option>  
    ))}
</select>
<br></br>
<Button variant="primary" onClick={ () => updateUserService(selectedUser, selectedService) }>Edit user and service</Button>
<br>
</br>
         <Features
        subheading={<Subheading>We have the following raports:</Subheading>}
        heading="Consumption"
    />
         <Content>
         
        <Table striped bordered hover>
    <thead>
    <tr>
        <th>#</th>
        <th>Client</th>
        <th>Company</th>
        <th>Month</th>
        <th>Consumption MWh</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
                      { Raports.map((Raport, index) => (
                          <tr key={ Raport.id}>
                              <td>{ index + 1 }</td>
                              <td>{ Raport.user_name }</td>
                              <td>{ Raport.user_company }</td>
                              <td>{ Raport.month }</td>
                              <td>{ Raport.consumption }</td>
                              <td>
                                  <Button variant="primary" onClick={ () => deleteRaport(Raport.id) }>Delete</Button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
  </Table>
          </Content>
          <Features
        subheading={<Subheading>We have the following services:</Subheading>}
        heading="Services"
    />
          <Content>
      <Table striped bordered hover>
  <thead>
  <tr>
      <th>#</th>
      <th>Title</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
                    { Services.map((Service, index) => (
                        <tr key={ Service.id}>
                            <td>{ index + 1 }</td>
                            <td>{ Service.title }</td>
                            <td>{ Service.price }</td>
                            <td>
                                <Button variant="danger" href={`/edit/${Service.id}`}>Edit</Button>
                                <Button variant="primary" onClick={ () => deleteService(Service.id) }>Delete</Button>
                            </td>
                        </tr>
                    )) }
                </tbody>
                <Button variant="primary" href={`/AddServices`}>Add a new service!</Button>

</Table>
        </Content>
        <Features
        subheading={<Subheading>We have the following messages:</Subheading>}
        heading="Messages"
    />
        <Content>
      <Table striped bordered hover>
  <thead>
  <tr>
      <th>#</th>
      <th>Email</th>
      <th>Name</th>
      <th>Subject</th>
      <th>Message</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
                    { Messages.map((Messages, index) => (
                        <tr key={ Messages.id}>
                            <td>{ index + 1 }</td>
                            <td>{ Messages.email }</td>
                            <td>{ Messages.name }</td>
                            <td>{ Messages.subject }</td>
                            <td>{ Messages.message }</td>
                            <td>
                                <Button variant="primary" onClick={ () => deleteMessages(Messages.id) }>Delete</Button>
                            </td>
                        </tr>
                    )) }
                </tbody>
   </Table>
     </Content>
        <Features
        subheading={<Subheading>We have the following messages from the users:</Subheading>}
        heading="Messages from clients"
    />
          <Content>
      <Table striped bordered hover>
  <thead>
  <tr>
      <th>#</th>
      <th>Client</th>
      <th>Name</th>
      <th>Subject</th>
      <th>Message</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
                    { MessagesLoggedIn.map((MessagesLoggedIn, index) => (
                        <tr key={ MessagesLoggedIn.id}>
                            <td>{ index + 1 }</td>
                            <td>{ MessagesLoggedIn.user_company }</td>
                            <td>{ MessagesLoggedIn.user_name }</td>
                            <td>{ MessagesLoggedIn.subject }</td>
                            <td>{ MessagesLoggedIn.message }</td>
                            <td>
                                <Button variant="primary" onClick={ () => deleteMessagesLoggedIn(MessagesLoggedIn.id) }>Delete</Button>
                            </td>
                        </tr>
                    )) }
                </tbody>
</Table>
       </Content>
       <Footer />
     </AnimationRevealPage>
   );
 }
 export default DashboardAdm