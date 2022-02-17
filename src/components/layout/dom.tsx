import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import Sidebar from '@/components/layout/header/sidebarcomponents/SideBar'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom'
      ref={ref}
    >
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default Dom
