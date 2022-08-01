import { Box } from '@chakra-ui/react'
import React from 'react'

import styles from "../Styles/Navbar.module.css"
import NoTransitionExample from "../Styles/Corousel"
import Footers from '../Component/Footers'
import Logo from '../Styles/Logo'
import Newsdata from '../Component/Newsdata'
const Home = () => {

  const[loading,setLoading]=React.useState(true)
 React.useEffect(() => {
  setTimeout(() => {
   setLoading(false)
  },1000);
  }, [])
  
  return (

<Box className={styles.outer}>


{loading==false?<NoTransitionExample></NoTransitionExample>:<h1 style={{textAlign:"center"}}>...Loading</h1>}


{loading==false?<Logo></Logo>:""}

<Newsdata></Newsdata>
<Footers></Footers>

</Box>
  )
}

export default Home