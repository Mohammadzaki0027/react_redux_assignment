import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../Styles/Music.module.css";
import { border, Box, Input } from "@chakra-ui/react";
import { editmusic, getmusic } from "../Redux/Appreducer/action";
const EditMusic = () => {
  const [musicname, setMusicname] = React.useState("");
  const [musicgenre, setMusicgenre] = React.useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const [singlemusicdata, setSingleMusicData] = React.useState({});
  const Musicrecord = useSelector((store) => store.Appreducer.musicRecord);

  React.useEffect(() => {
    if (id) {
      const found =Musicrecord.length!==0&& Musicrecord.find((albums) => albums.id === id);

      if (found) {
        setMusicname(found.name);
        setMusicgenre(found.artist);
      }
      console.log(musicname, musicgenre);
    }
  }, [id, Musicrecord]);

  const handlesubmit = (e) => {
    e.preventDefault();
const paylaod={name:musicname,
  artist:musicgenre,

}
dispatch(editmusic(paylaod,id)).then((r)=>{
dispatch(getmusic())

})

  };

  return (
    <div  className={styles.editdiv}>
      <h1>Edit Music</h1>
      <div className={styles.editinput}>
        <form onSubmit={handlesubmit}>
          <Input
            placeholder="Edit Artist"
            value={musicname}
            onChange={(e) => {
              setMusicname(e.target.value);
            }}
          ></Input>

          <Input
            placeholder="Edit Genre"
            value={musicgenre}
            onChange={(e) => {
              setMusicgenre(e.target.value);
            }}
          ></Input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditMusic;
