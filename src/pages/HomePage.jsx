import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Container, Divider, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import '../../src/App.css'
import result1 from '../assets/images/result_1.png'
import result2 from '../assets/images/result_2.png'
import result3 from '../assets/images/result_3.png'
import result4 from '../assets/images/result_4.png'
import result5 from '../assets/images/result_5.png'
import result6 from '../assets/images/result_6.png'
import result7 from '../assets/images/result_7.png'
import result8 from '../assets/images/result_8.png'
import result9 from '../assets/images/result_9.png'
import result10 from '../assets/images/result_10.png'
import result11 from '../assets/images/result_11.png'
import result12 from '../assets/images/result_12.png'
import Frame from '../assets/images/Frame.png'
import { motion } from "framer-motion";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
const HomePage = () => {
  const MotionBox = motion(Box);
  
  return (
    <>
    <Box w={'100%'}>
    <Container maxW={'1300px'} px={'20px'}>
      <Box display={{base:'inline-block',sm:"inline-block",lg:'flex'}} alignItems={'center'}>
      
        <Heading fontSize={40}  bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'
  >G'oyalar va haqiqat o'rtasidagi tafovutni bartaraf etish</Heading>
        <MotionBox
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
    >
     <Image src={Frame} w={750} h={300} />
    </MotionBox> 
      </Box>
<Center><Heading  bgGradient='linear(to-l, #7928CA, #FF0080)'bgClip='text' mt={100}>Bizning Natijalarimiz 2024</Heading></Center>
<StatGroup display={{base:'inline-block',sm:'inline-block',md:'flex'}} justifyContent={'center'} mt={10} >
  <Stat>
    <StatLabel>2024 yil</StatLabel>
    <StatNumber>50 talaba
        
    </StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>2023</StatLabel>
    <StatNumber>32 talaba</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)',xl:'repeat(4, 1fr)',}} gap={10} mt={30}>
  <GridItem >
  <Card flexWrap={'wrap'} boxShadow='dark-lg'  rounded='md'   maxW='sm' maxH={800}>
  <CardBody>
    <Image
      src={result1}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Masharipova Yorqinoy Ravshanbek Qizi</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        169.90 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card  flexWrap={'wrap'}  boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm' >
  <CardBody>
    <Image
      src={result2}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Rahimova Havasxon San'atbek Qizi</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        141.20 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result3}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Matrasulova Intizor Kenjaboy Qizi</Heading>
    
      <Text color='blue.600' fontSize='2xl'>
        178.20 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result4}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Rustamova O'g'iloy Zafar Qizi</Heading>
      <Text color='blue.600' fontSize='2xl'>
     187.60 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)',xl:'repeat(4, 1fr)',}} gap={6} mt={30}>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'   maxW='sm'>
  <CardBody>
    <Image
      src={result5}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Jumanazarova Muxlisa Mavlonboy Qizi</Heading>
     
      <Text color='blue.600' fontSize='2xl'>
        106.30 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result6}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Ahmedova Dilrabo Farhod Qizi</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        156.70 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result7}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Mammatjanova Sevinchoy Ilhomboy Qizi</Heading>
      <Text color='blue.600' fontSize='2xl'>
        171.80 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result8}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Yusupova Ruxsora Ulug'bek Qizi</Heading>
     
      <Text color='blue.600' fontSize='2xl'>
       161.00 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)',xl:'repeat(4, 1fr)',}} gap={6} my={30}>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'   maxW='sm'>
  <CardBody>
    <Image
      src={result9}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Ozodjonova Gulsanam Otanazar Qizi</Heading>
     
      <Text color='blue.600' fontSize='2xl'>
       151.60 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result10}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Masharipova Farida Alisher Qizi</Heading>
     
     <Text color='blue.600' fontSize='2xl'>
        155.10 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result11}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Samandarova Shukurjon Omonboy Qizi</Heading>
    
      <Text color='blue.600' fontSize='2xl'>
       103.80 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  <GridItem>
  <Card boxShadow='dark-lg'  rounded='md'  className='card' maxW='sm'>
  <CardBody>
    <Image
      src={result12}
      borderRadius='lg'
      w={400}
      height={350}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Rahmatullayeva Guliruxsora Jamol Qizi</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        173.00 Ball
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  </GridItem>
  
</Grid>
    </Container>
    </Box>
    </>
  )
}

export default HomePage;