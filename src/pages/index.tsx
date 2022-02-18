import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions'
import {
  Box,
  Flex,
  Container,
  Heading,
  VStack,
  Button,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import SideBar from '@/components/layout/header/sidebarcomponents/SideBar'
import { getToken } from 'next-auth/jwt'

// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Flex>
        <Box as={Container} maxW={'5xl'} mt={'25vh'}>
          <Heading>Spotify Visualiser</Heading>
          <Text>Logged in as {session?.token?.email}</Text>
          <Button onClick={() => signOut()} bgColor={'green.600'}>
            sign Out
          </Button>
        </Box>
      </Flex>
    )
  }
  return (
    <Flex>
      <Box as={Container} maxW={'5xl'} mt={'25vh'}>
        <VStack justifyContent={'center'} spacing={'20px'}>
          <Heading>Spotify Visualiser</Heading>
          <Button onClick={() => signIn()} bgColor={'green.600'}>
            Log In
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Shader />
      <color attach='background' args={['black']} />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
