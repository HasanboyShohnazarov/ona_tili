import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import axios from 'axios'

const RegisterPage = () => {
    const history=useNavigate();  
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault()

    try {
      await axios.post('https://localhost:8000/',{
        email,password
      })
      .then(res=>{
        if(res.data=="exist"){
            alert("User already exists")
        }
        else if(res.data=="notexist"){
            history("/home",{state:{id:email}})
        }
    })
    .catch(e=>{
        alert("wrong details")
        console.log(e);
    })

}
catch(e){
    console.log(e);

}
  }
  return (
    <><Box display={'inline'} w={'100%'}>
      <Container px={20}  maxW={'1300px'} >
    <Heading>Register</Heading>
    <Input variant='flushed' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'passworwtyuiopwd'}
        placeholder='Enter password'
        onChange={(e)=>{setPassword(e.target.value)}}
        variant='flushed'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
<Button onClick={submit}>Submit</Button>
    <Text>Or</Text>
    <Link to={'/login'}>Login Page</Link>
    </Container>
    </Box>
  
    </>
  )
}

export default RegisterPage