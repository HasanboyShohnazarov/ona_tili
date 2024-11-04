import React from 'react'
import {Box,Container, Heading, Image, Text} from '@chakra-ui/react'
import icon from '../assets/icons/logo.png'
import instagram from '../assets/icons/instagram.png'
import telegram from '../assets/icons/telegram.png'
import youtube from '../assets/icons/youtube.png'
import { Link } from 'react-router-dom'

const FooterPage = () => {
  return (
    <>
     <Box  w={'100%'} bg={'#3a5a40'} >
     <Container maxW={'1300px'}  display={'flex'} alignItems={'center'} justifyContent={'space-between'}  >
      
      <Box display={{base:'inline-block',sm:'flex',lg:'flex' }}alignItems={'center'}>
        
     <Text>Since 2024</Text>
     <Image w={10} src={icon}/>
     <Text>All Rights Reserved</Text>
     
     </Box>
    
     <Box display={{base:'inline-block',sm:'flex',lg:'flex' }} alignItems={'center'} gap={10}  >
      <a href="https://www.instagram.com/hasanboy_3001/"><Image mb={1} w={6} src={instagram}/></a>
     <a href="https://t.me/hasanboy_3001"><Image mb={1} w={6} src={telegram}/></a> 
  <a href="https://www.youtube.com/@alishoh2108"> <Image mb={1} w={6} src={youtube}/></a>   
     </Box>
     
     </Container>
     </Box>
    </>
  )
}

export default FooterPage