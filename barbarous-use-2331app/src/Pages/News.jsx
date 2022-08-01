import React from 'react'
import { useContext } from 'react'
import Newsdata from '../Component/Newsdata'
import { Button} from "@chakra-ui/react"
import styles from "../Styles/Navbar.module.css"
import { useNavigate } from 'react-router-dom'
import Footers from '../Component/Footers'
const News = () => {
const[loading,setLoading]=React.useState(false)
const handleclick=()=>{
  setLoading(true)
setTimeout(() => {

  setLoading(false)
}, 1000);
}
  return (
    <div>
      <div className={styles.newspage} >
<div className={styles.article}>
  <h1>News And Articles</h1>  </div>
  <div className={styles.btn}>
<Button width="100px" backgroundColor="teal"  onClick={handleclick}>Latest</Button>
<Button width="100px" backgroundColor="teal"  onClick={handleclick}>News</Button>
<Button width="100px" backgroundColor="teal"  onClick={handleclick}>On the Day</Button>
<Button width="100px" backgroundColor="teal"  onClick={handleclick}>Match News</Button>

</div>
      </div>
     {!loading? <div><Newsdata></Newsdata>
      </div>:<h1 style={{textAlign:"center"}}>...loading</h1>}
      <Footers></Footers>
    </div>
  )
}

export default News