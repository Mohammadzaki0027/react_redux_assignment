import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getmusic } from "../Redux/Appreducer/action";
import { Link } from "react-router-dom";
import styles from "../Styles/Music.module.css";
const MainMusic = () => {
  const dispatch = useDispatch();
  const Musicrecord = useSelector((store) => store.Appreducer.musicRecord);
  const Recordarray = useSelector((store) => store);
  const [searchParams] = useSearchParams();
  const loading = useSelector((store) => store.Appreducer.isLoading);

  const location = useLocation();
  // console.log(searchParams.getAll("genre"));
  React.useEffect(() => {
    if (location || Musicrecord.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryparams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      dispatch(getmusic(queryparams));
    }
  }, [location.search]);

  return (
    <>
      {loading ? (
        <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" />
      ) : (
        <>
          {Musicrecord?.map((e) => (
            <div className={styles.musicrecord} key={e.id}>
              <Link to={`/music/${e.id}`}>
                <div>
                  <h4>Name:{e.name}</h4>
                </div>
                <div className={styles.img}>
                  <img src={e.img} style={{width:"50%",
margin: "auto"}} alt="" />
                </div>
                <div>
                  <h5>Generic:{e.genre}</h5>
                </div>
                <div>
                  <h5>Year:{e.year}</h5>
                </div>
                <div>
                  <h5>Artist:{e.artist}</h5>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MainMusic;
