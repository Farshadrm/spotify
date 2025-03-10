import "../Styles/MusicPlayer.css";
import {
    FaBackward,
    FaForward,
    FaHeart,
    FaPause,
    FaPlay,
    FaRegHeart,
    FaShareAlt,
    FaStepBackward,
    FaStepForward,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc }) {
    const [love, setLove] = useState(false);
    const [play, setPlay] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef(); //our audio tag
    const progressBar = useRef(); //our progress bar
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
    }, [
        play /* audioPlayer.current.onloadedmetadata , audioPlayer.current.readyState */,
    ]);

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);

        //10 => 09 or 11 , 12;
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec / 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMin}:${returnSec}`;
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changeCurrnetTime();
        animationRef.current = requestAnimationFrame(whilePlaying)
    };

    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changeCurrnetTime();
    };

    const changeCurrnetTime = () => {
        progressBar.current.style.setProperty(
            "--player-played",
            `${(progressBar.current.value / duration) * 100}%`
        );

        setCurrentTime(progressBar.current.value);
    };

    function changePlayPause() {
        const prevValue = play;
        console.log(audioPlayer);

        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        }

        setPlay(!play);
    }

    function changeLove() {
        setLove(!love);
    }

    return (
        <div className="musicPlayer">
            <div className="songImage">
                <img src={imgSrc} alt="" />
            </div>
            <div className="songAttributes">
                <audio src={song} preload="metadata" ref={audioPlayer} />

                <div className="top">
                    <div className="left">
                        <div className="loved" onClick={changeLove}>
                            {love ? (
                                <i>
                                    <FaHeart />
                                </i>
                            ) : (
                                <i>
                                    <FaRegHeart />
                                </i>
                            )}
                        </div>
                        <div className="download">
                            <i>
                                <BsDownload />
                            </i>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="back">
                            <i>
                                <FaStepBackward />
                            </i>
                            <i>
                                <FaBackward />
                            </i>
                        </div>
                        <div className="playPause" onClick={changePlayPause}>
                            {play ? (
                                <i>
                                    <FaPause />
                                </i>
                            ) : (
                                <i>
                                    <FaPlay />
                                </i>
                            )}
                        </div>
                        <div className="forward">
                            <i>
                                <FaForward />
                            </i>
                            <i>
                                <FaStepForward />
                            </i>
                        </div>
                    </div>
                    <div className="right">
                        <i>
                            <FaShareAlt />
                        </i>
                    </div>
                </div>
                <div className="bottom">
                    <div className="currentTime">
                        {CalculateTime(currentTime)}
                    </div>
                    <input
                        type="range"
                        className="progresBar"
                        ref={progressBar}
                        onChange={changeProgress}
                    />
                    <div className="duration">
                        {duration && !isNaN(duration) && CalculateTime(duration)
                            ? CalculateTime(duration)
                            : "00:00"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
