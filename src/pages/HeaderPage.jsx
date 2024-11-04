import { Container,Box, Image, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import BurgerMenuPage from './BurgerMenuPage'
import ToggleColorMode from '../components/ToggleColorMode'
import QuizTestPage from './QuizTestPage'
import {  keyframes } from '@chakra-ui/react';

const HeaderPage = () => {
  const borderAnimation = keyframes`
  0% {
    width: 0;
    left: 50%;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 50%;
  }
`;
  return (
    <>
    <Box mb={10}  w={'100%'}>
    <Container maxW={'1300px'} px={'20px'}>
   
<Box as='nav' display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
  
    <NavLink to={'/'}><Image  src={logo} width={'132px'} h={'100px'}/></NavLink>
    <Box display={{base:"none",sm:"none",md:'none',lg:'flex'}} justifyContent={'center'} gap={10}>
    <Heading>
      <NavLink 
       
        to={'/'}
      >
        {({ isActive }) => (
          <Box
            position="relative"
            _before={
              isActive
                ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    width: '100%', 
                    backgroundColor: 'red',
                    animation: `${borderAnimation} 2s ease-in-out infinite`,
                  }
                : {}
            }
          >
            Home
          </Box>
        )}
      </NavLink>
    </Heading>
    <Heading>
    <NavLink 
       
       to={'/about'}
     >
       {({ isActive }) => (
         <Box
           position="relative"
           _before={
             isActive
               ? {
                   content: '""',
                   position: 'absolute',
                   bottom: 0,
                   left: 0,
                   height: '2px',
                   width: '100%', 
                   backgroundColor: 'red',
                   animation: `${borderAnimation} 2s ease-in-out infinite`,
                 }
               : {}
           }
         >
           About us
         </Box>
       )}
     </NavLink>
      </Heading>
    <Heading>
    <NavLink 
       
       to={'/contact'}
     >
       {({ isActive }) => (
         <Box
           position="relative"
           _before={
             isActive
               ? {
                   content: '""',
                   position: 'absolute',
                   bottom: 0,
                   left: 0,
                   height: '2px',
                   width: '100%', 
                   backgroundColor: 'red',
                   animation: `${borderAnimation} 2s ease-in-out infinite`,
                 }
               : {}
           }
         >
           Contact us
         </Box>
       )}
     </NavLink>
    </Heading>
    </Box>
    <Box alignItems={'center'}  display={{base:"none",sm:"flex",md:'flex',lg:'flex'}} gap={'20px'}>
   
     <Button> <NavLink 
       
       to={'/login'}
     >
       {({ isActive }) => (
         <Box
           position="relative"
           _before={
             isActive
               ? {
                   content: '""',
                   position: 'absolute',
                   bottom: 0,
                   left: 0,
                   height: '2px',
                   width: '100%', 
                   backgroundColor: 'red',
                   animation: `${borderAnimation} 2s ease-in-out infinite`,
                 }
               : {

               }
           }
         >
           Login
         </Box>
       )}
     </NavLink></Button>
     <Button colorScheme='blue'> <NavLink 
       
       to={'/register'}
     >
       {({ isActive }) => (
         <Box
           position="relative"
           _before={
             isActive
               ? {
                   content: '""',
                   position: 'absolute',
                   bottom: 0,
                   left: 0,
                   height: '2px',
                   width: '100%', 
                   backgroundColor: 'red',
                   animation: `${borderAnimation} 2s ease-in-out infinite`,
                 }
               : {}
           }
         >
           Register
         </Box>
       )}
     </NavLink></Button>

    <ToggleColorMode  />
      </Box>
    <BurgerMenuPage/>   
    
</Box>

    </Container>
    </Box>
    </>
  )
}

export default HeaderPage