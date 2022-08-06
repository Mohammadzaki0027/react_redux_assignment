import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getmusic } from "../Redux/Appreducer/action";
import styles from "../Styles/Music.module.css";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
const SingleMusic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [singlemusicdata, setSingleMusicData] = React.useState({});
  const Musicrecord = useSelector((store) => store.Appreducer.musicRecord);

  React.useEffect(() => {
    if (Musicrecord) {
      dispatch(getmusic());
    }
  }, [dispatch, Musicrecord.length]);

  React.useEffect(() => {
    if (id) {
      const found = Musicrecord.find((albums) => albums.id === id);
      setSingleMusicData(found);
      //  setSingleMusicData({data:"zaki"})
    }
  }, [id, Musicrecord]);
  React.useEffect(() => {}, []);

  return (
    <div>
      <div className={styles.btn}>
        <h1 className={styles.navtext}>SingleMusic</h1>
        <Link to={"/"}>
          <Button>Go to HomePage</Button>
        </Link>
      </div>

      {singlemusicdata ? (
        <div className={styles.siglediv}>
          <img src={singlemusicdata.img} alt="" />
          <h1>Name:{singlemusicdata?.name}</h1>
          <h4>Genre:{singlemusicdata?.genre}</h4>
          <h4>Year:{singlemusicdata?.year}</h4>
          <h4>Artist:{singlemusicdata?.artist}</h4>
          <Box marginTop='50px'>
       <Button padding="20px"><Link to={`/music/${id}/edit`}>Edit</Link></Button>
        </Box>
        </div>
        
      ) : (
        ""
      )}





    </div>
  );
};

export default SingleMusic;
