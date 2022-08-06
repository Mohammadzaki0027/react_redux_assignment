import React from "react";
import Styles from "../Styles/Style.module.css";
const SlideShow = () => {
  const arr = [
    {
      url: "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Wallet-Studio-Lifestyle-02_360x.jpg?v=1637739996",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1400x.png?v=1646626071",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BwuR4rFwMd_DekTm1m50S0JivR83ci-y0w&usqp=CAU",
    },
  ];

  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
      if (count === arr.length - 1) {
        setCount(0);
      }
    }, 4000);

    return (id) => {
      clearInterval(id);
    };
  }, [count]);

  return (
    <div>
      <div className={Styles.imageid}>
        <img src={arr[count].url} alt="" className={Styles.images} />
      </div>
    </div>
  );
};

export default SlideShow;
