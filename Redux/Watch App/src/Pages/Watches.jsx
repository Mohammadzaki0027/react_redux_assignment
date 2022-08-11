import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import styles from "../Components/Styles.module.css"
import { getdata } from "../Redux/AppReducer/action";
const Watches = () => {
  const Data=useSelector((store)=>store.Appreducer)
  const dispatch=useDispatch()
  console.log("store",Data);
  React.useEffect(() => {
    
  
    dispatch(getdata())
  }, [])
  
  return (
    <div className={styles.container}>
    <div className={styles.filterdiv}> <Filter /></div>

    <div className={styles.mapdiv}>
      {/* Map through the watch list here using WatchCard Component */}

     {/* { Data.length!=0&&Data?.map((e)=>(
      <Link to={`/watches/:id`}>
          <div key={e.id}>
<img src={e.image} alt="" />
<h4>Name:{e.name}</h4>
<h4>Category: {e.category}</h4>
          </div>
      </Link>
      ))} */}
    </div>
  </div>
  );
};

export default Watches;
