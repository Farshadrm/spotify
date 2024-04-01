import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import Songs from "./Songs";
import { useEffect, useState } from "react";
import MusicPlayer from "./MusicPlayer";
const AudioList = () => {
    const [songs, setSongs] = useState(Songs);
    const [activeId, setActiveId] = useState(0);
    const [passSong, setPassSong] = useState(Songs[0].song);
    const [imageSong, setImageSong] = useState(Songs[0].imgSrc);

    useEffect(() => {
        // console.log("j");
    }, [activeId, songs]);

    function clickHandler(song) {
        // console.log(song.id)
        song.favourite = !song.favourite;
        // console.log(song.favourite)
        // console.log(Songs)
        setSongs([...Songs]);
    }

    function click(song) {
        setActiveId(song.id);
        // console.log(song.id)
    }

    function setMainSong(songSrc, imgSrc) {
        setPassSong(songSrc);
        setImageSong(imgSrc);
    }

    return (
        <div className="audioList">
            <h2 className="title">
                The List
                <span>{`${Songs.length} Songs`}</span>
            </h2>
            <div className="songsContainer">
                {Songs &&
                    Songs.map((song) => (
                        <div
                            key={song.id}
                            onClick={() => {
                                click(song);
                            }}
                            className={
                                activeId === song.id ? "active songs" : "songs"
                            }
                        >
                            <div className="count">{`# ${song.id}`}</div>
                            <div className="song">
                                <div className="imgBox">
                                    <img src={song.imgSrc} alt="" />
                                </div>

                                <div className="section">
                                    <p
                                        className="songName"
                                        onClick={() => {
                                            setMainSong(song.song, song.imgSrc);
                                        }}
                                    >
                                        {song.songName}
                                        <span className="spanArtist">
                                            {" "}
                                            {song.artist}{" "}
                                        </span>
                                    </p>
                                    <div className="hits">
                                        <p className="hit">
                                            <i>
                                                <FaHeadphones />
                                            </i>
                                            95,490,102
                                        </p>

                                        <p className="duration">
                                            <i>
                                                <FaRegClock />
                                            </i>
                                            03:04
                                        </p>
                                        <div
                                            className="favourite"
                                            onClick={() => clickHandler(song)}
                                        >
                                            {song.favourite === true ? (
                                                <i>
                                                    <FaHeart />
                                                </i>
                                            ) : (
                                                <i>
                                                    <FaRegHeart />
                                                </i>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <MusicPlayer song={passSong} imgSrc={imageSong} />
        </div>
    );
};
export default AudioList;
