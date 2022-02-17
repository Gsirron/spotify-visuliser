import {
  Box,
  VStack,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Flex,
  BoxProps,
  Text,
  CloseButton,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import MobileNav from './MobileNav'
import NavItem from './NavItem'
import { useSession, signIn, signOut } from 'next-auth/react'

interface LinkItemProps {
  name: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'home' },
  { name: 'timeline' },
  { name: 'newstuff' },
]
const SideBar = ({ children }: { children: ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: session } = useSession()
  return (
    <Box minH='100vh' id='dog' bg={useColorModeValue('gray.300', 'gray.900')}>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  )
}

interface SideBarContentProps extends BoxProps {
  onClose: () => void
}

const SideBarContent = ({ onClose, ...rest }: SideBarContentProps) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box pt={'100px'}>
        {LinkItems.map((link) => (
          <NavItem key={link.name}>{link.name}</NavItem>
        ))}
      </Box>
    </Box>
  )
}

export default SideBar
