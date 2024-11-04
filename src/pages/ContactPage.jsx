import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/images/6.webp'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast
} from '@chakra-ui/react';

export const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_qufwugi', 'template_hjsln72', form.current, {
        publicKey: 'rpEGacnUoyLczMv4X' // Use environment variable for security
      })
      .then(
        () => {
          setStatus('Success! Your message has been sent.');
          form.current.reset(); // Reset form on success
          toast({
            title: 'Message Sent',
            description: 'Your message has been sent successfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          setStatus(`Failed to send message. Error: ${error.text}`);
          toast({
            title: 'Error',
            description: `Failed to send message. Error: ${error.text}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box p={4} maxW="600px" mx="auto" >
      <form ref={form} onSubmit={sendEmail}>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="user_name">Ismingiz</FormLabel>
          <Input id="user_name" name="user_name" placeholder="Your name" />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="user_email">Elektron Pochtangiz</FormLabel>
          <Input id="user_email" name="user_email" type="email" placeholder="Namuna:hasanboyshohnazarov@gmail.com" />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="message">Shikoyat yoki Fikr yozishingiz mumkin</FormLabel>
          <Textarea id="message" name="message" placeholder="Your message" />
        </FormControl>
        
        <Button type="submit" colorScheme="teal">
          Yuborish
        </Button>
      </form>
      {status && (
        <Box mt={4} p={4} color={status.startsWith('Failed') ? 'red.500' : 'green.500'}>
          {status}
        </Box>
      )}

    </Box>
  );
};
