import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import axios from 'axios'

const LoginPage = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
    async function register() {
      try {
        await axios.post('')
      } catch (error) {
        
      }
    }
  return (
    <><Box display={'inline'} w={'100%'}>
      <Container px={20}  maxW={'1300px'} >
    <Heading>Login</Heading>
    <form action="POST">
    <Input variant='flushed' placeholder='Email' />
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        variant='flushed'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
<Button >Submit</Button>
</form>
    <Text>Or</Text>
    <Link to={'/register'}>Register Page</Link>
    </Container>
    </Box>
   
    </>
  )
}

export default LoginPage