import React, { useContext } from "react";
import { ApiContext } from "../Components/Api";
import SlideShow from "../Components/SlideShow";
import Styles from "../Styles/Style.module.css"
const Home = () => {
  const { data } = useContext(ApiContext);
  return (
    <div>
      {/* <SlideShow></SlideShow> */}
      <div className={Styles.products}>
        {data.map((items) => (
          <div className={Styles.product} key={items.id}>
            <img src={items.image_url} alt="" />
            <h5>{items.name}</h5>
            <h5>{items.price}</h5>

            <div className={Styles.btn}>
              <div>
                <button className={Styles.btn1}>AddtoCart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
