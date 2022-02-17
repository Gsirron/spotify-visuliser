import dynamic from 'next/dynamic'
import { Box, Flex, Container, Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
const Box2 = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    <Flex>
      <Box as={Container} maxW={'5xl'}>
        <VStack justifyContent={'center'}>
          <Heading>Spotify app</Heading>
          <Link href={'box'}>click to go box</Link>
        </VStack>
      </Box>
    </Flex>
  )
}

const R3F = () => {
  return (
    <>
      <Box2 route='/' />
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
      title: 'Box',
    },
  }
}
