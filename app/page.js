'use client'
import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
// import vid from '../public/video.mp4'
import frame from '../public/frame.png'
import { useEffect, useRef, useState } from 'react'

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export default function Home() {
  const vidRef = useRef()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const isValid = isValidEmail(email)

  const [sent, setSent] = useState(false)

  const handleSend = async () => {
    if (sent) {
      return;
    }

    if (loading || !isValid) {
      return;
    }

    setLoading(true)
    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwhJ24M74852k9HZXztnOeUAYL4UZ-opDKnsFTUFGXYCCH3O7T5DnLDD1AUW-xj0GSi/exec';
    fetch(googleScriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}`
    })
      .then(response => {
        console.log('Email saved successfully:', response);
        setLoading(false)
        setSent(true)
      })
      .catch(error => {
        console.error('Error saving email:', error);
        alert('Oops! Something went wrong. Please try again.');
        setLoading(false)
      });
  }

  return (
    <Flex
      backgroundColor={'#0F0F0F'}
      minH={'100vh'}
    >
      <Container
        maxW={'1600px'}
        py={4}
        display={'flex'}
        flexDirection={'column'}
        px={[0, 4]}
      >

        <Flex
          flex={1}
          flexDirection={['column', 'row']}

        >
          <Flex
            my={[8, 32]}
            flex={1}
            flexDirection={'column'}
            justifyContent={['start', 'center']}
            gap={[8, 8]}
            mr={[0, 8]}
            px={[4, 0]}
          >

            <Heading
              textAlign={['center', 'left']}
              fontSize={['6xl', '8xl']}
            >sachet tv</Heading>

            <Box mt={[8, 0]} />

            <Heading
              fontSize={['3xl', '5xl']}
            >
              no filters! no editing!
              <br />
              just capturing and sharing,
              <br />
              in real-time.
            </Heading>

            <Text
              fontSize={['xl', '3xl']}
            >
              sachet tv lets you capture and share real-time events with 1 minute short live streams.
            </Text>

            <Flex>
              <Input
                placeholder='Enter your email'
                _placeholder={{
                  color: '#d9cece'
                }}
                color={'#ffffff'}
                w={'80'}

                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button
                // backgroundColor={'#ffffff'}
                colorScheme='white'
                _disabled={{
                  background: '#ffffff',
                  cursor: 'not-allowed'
                }}
                bg={'#ffffff'}
                variant={'solid'}
                color={'#000000'}
                ml={[2, 4]}
                px={[6, 12]}
                onClick={handleSend}
                isDisabled={!isValid || loading}
                opacity={sent ? 0.7 : 1}
              >
                {sent ? 'Sent' : 'Sign Up'}
              </Button>
            </Flex>

            <Box mt={[12, 0]} />
          </Flex>

          <Flex
            flex={1}
            flexDirection={'column'}
            justifyContent={'center'}
            position={'relative'}
            background={['white', 'transparent']}
            py={[12, 0]}
          >
            {/* <iframe allowfullscreen="" frameborder="1" height="472.5" src="https://www.loom.com/embed/03a4262346a64ab3a497be2b8e75b408?sid=f9a1967d-ee53-4bbb-8b1f-214eac11fefd?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" width="840"></iframe> */}

            <Box
              position={'relative'}
            >
              <Image
                src={frame}
                style={{
                  objectFit: 'contain',
                  // maxHeight: 'calc(100vh - 356px)'
                  maxHeight: '100%',
                  position: 'absolute',
                  zIndex: 12,
                  pointerEvents: 'none'
                }}
              />
              <Box
                height='100%'
                width='100%'
                display='flex'
                justifyContent='center'
                padding='24px'
                top={0}
              >
                <video
                  src={'./video1.mp4'}
                  style={{
                    height: '100%',
                    borderRadius: '10px'
                  }}
                  ref={vidRef}
                  muted
                  autoPlay
                  controls
                />
              </Box>

            </Box>

          </Flex>

        </Flex>

        <Flex
          justifyContent={'center'}
          mt={[8, 0]}
        >
          <Text>
            © 2023 sachet tv. all rights reserved.
          </Text>
        </Flex>
      </Container>
    </Flex>
  )
}
