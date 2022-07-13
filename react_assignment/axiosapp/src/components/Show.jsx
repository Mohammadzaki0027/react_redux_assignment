import React from 'react'
import Styles from "./fetch.module.css"
const Show = ({data}) => {
const[loading,setLoading]=React.useState(false)
setTimeout(() => {
    setLoading(true)
}, 2000);

    return (
    <div>
 {!loading?<h1>...please wait we are loading data</h1>:<div className={Styles.gitdiv}>

   
{ data?.map((e)=>(
     <div key={e.node_id}>
<img src={e.avatar_url} alt="" style={{width:"100px"}} />
<h2>{e.login}</h2>
     </div>
 ))}



</div>}


    </div>
  )
}

export default Show