import React from "react";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import { FaChevronRight } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";
import { Datacontext } from "../Pages/Db";
import { useNavigate } from "react-router-dom";
const Newsdata = () => {
  const newsdata= useContext(Datacontext);
  let navigate = useNavigate()
const handleclick=()=>{
navigate("/News")
}
  return (
    <Box className={styles.newsbox}>
      <Box className={styles.heading}>
        <h1>News And Articles</h1>
        <FaChevronRight onClick={handleclick}></FaChevronRight>
      </Box>
      {newsdata?.map((e)=>(
     <div className={styles.newsitem} key={e.id}>
<div className={styles.image}><img src={e.imageurl} alt="" /></div>
<div className={styles.halfdiv}>

<div className={styles.title}><h1>{e.title}</h1></div>
<div className={styles.description}><h4>{e.description}</h4></div>
<div className={styles.date}>

  <div>{e.author}</div>
<div>{e.publishedAt}</div>
</div>

</div>


     </div>
      ))}
    </Box>
  );
};

export default Newsdata;
