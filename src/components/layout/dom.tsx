import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import SideBar from '@/components/layout/header/sidebarcomponents/SideBar'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <Box
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom'
      ref={ref}
    >
      {children}
    </Box>
  )
}

export default Dom
