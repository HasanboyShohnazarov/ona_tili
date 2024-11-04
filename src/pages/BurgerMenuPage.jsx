import { Button, useDisclosure,Input,  Heading, Box } from '@chakra-ui/react'
import React from 'react'
import {HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ToggleColorMode from '../components/ToggleColorMode'
const BurgerMenuPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
 <Button display={{base:'flex',sm:'flex',md:'flex',lg:'none'}} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>

          </DrawerHeader>

          <DrawerBody>
    <Link to={'/'}> <Heading fontSize={30} mb={10}>Home</Heading> </Link>
    <Link to={'/about'}> <Heading fontSize={30} mb={10}>About</Heading> </Link>
    <Link to={'/contact'}> <Heading fontSize={30} mb={10}>Contact Us</Heading></Link>
    <Box display={'flex'} justifyContent={'space-around'}>
    <Link to={'/quiztest'}> <Heading fontSize={30} mb={10}>Quiz Test</Heading></Link>
    
    <ToggleColorMode  />
</Box>
          </DrawerBody>
    
          
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BurgerMenuPage