import React from 'react'
import image from '../assets/images/offer_team_image_1.png'
import { Box, Card, CardBody, Center, Container, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import result1 from '../assets/icons/card_2.png'
import result2 from '../assets/icons/card_3.png'
import result3 from '../assets/icons/card_4.png'
import result4 from '../assets/icons/card_1.png'
import fullstack from '../assets/images/frontend-vs-backend-development.webp'
const AboutPage = () => {
    return (
        <>
            <Box w={'100%'}>
                <Container maxW={'1300px'} px={'20px'}>
                    <Box mb={100} display={{ base: 'inline-block', sm: 'inline-block', lg: 'inline-block', xl: 'flex' }} alignItems={'center'} gap={10}>
                        <Heading>Biz Haqimizda Bilib Oling</Heading>
                        <Image src={image} />
                    </Box>
                    <Box >
                        <Grid mb={10} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', }} gap={10} mt={30}>
                            <GridItem >
                                <Card flexWrap={'wrap'} boxShadow='dark-lg' rounded='md' maxW='sm' maxH={800} >
                                    <CardBody  >
                                        <Image
                                            ml={12}
                                            src={result1}
                                            borderRadius='lg'

                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Vaqt samaradorligi</Heading>

                                            <Text >
                                                Bizning jamoamiz samarali va strategik ishlayotganligi sababli, butun ko'chirish jarayoni qisqa vaqt ichida yakunlanadi, shuning uchun siz Kiprda hayotingizni yo'lga qo'yishga ko'proq vaqt ajratasiz.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card flexWrap={'wrap'} boxShadow='dark-lg' rounded='md' className='card' maxW='sm' >
                                    <CardBody>
                                        <Image
                                            src={result2}
                                            borderRadius='lg'
                                            ml={12}

                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Quvontiruvchi Tajriba</Heading>

                                            <Text >
                                                Ko'chib o'tish har kim uchun qo'rqinchli va talabchan tajriba bo'lishi mumkin. Bizning jamoamiz sizga aql va xavfsizlik hissini taklif qiladigan eng yaxshi ko'chirish strategiyasini ishlab chiqishga ishonch hosil qiladi.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card boxShadow='dark-lg' rounded='md' className='card' maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={result3}
                                            borderRadius='lg'
                                            ml={12}


                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Xavfsizlik va ishonchlilik</Heading>

                                            <Text >
                                                Siz hal qilganingizdan so'ng, biz hamma narsa sizning kutganingizga va xizmatlarimiz sifati haqidagi tasavvuringizga mos kelishiga ishonch hosil qilamiz.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card boxShadow='dark-lg' rounded='md' className='card' maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={result4}
                                            borderRadius='lg'
                                            ml={12}


                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Shaxsiylashtirilgan qo'llab-quvvatlash</Heading>
                                            <Text >
                                                Bizning xizmatlarimiz sizga oilangiz bilan Kiprda yashash haqida kerakli ma'lumotlarni taqdim etishni o'z ichiga oladi.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                </Card>
                            </GridItem>

                        </Grid>
                    </Box>
                    <Box mb={2} display={{base:'inline-block',sm:'inline-block',lg:'flex'}} justifyContent={'space-around'} mx={20} >
                    <a href="https://t.me/hasanboy_3001"><Heading color={'#28afb0'}>Hasanboy Shohnazarov</Heading></a> 
                    <Heading color={'#ff595e'}>&</Heading>
                    <a href="https://t.me/anvarbek_197"><Heading color={'#03b5aa'}>Anvarbek Samandarov</Heading></a>
                    </Box>
                   <Center> <Image mb={10} src={fullstack} /></Center>
                </Container>
            </Box>
        </>
    )
}

export default AboutPage