import React from "react";
import {BsFillVolumeDownFill , BsMusicNoteList} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import track from "../img/track.jpg"

const TrackList =()=>{
    return(
        <div className="trackList">
            <div className="top">
                <img src={track} alt="trackImg" />
                <p className='trackName'>
                    sample name 

                    <spa className="trackSpan">Artist</spa>

                </p>
            </div>
            <div className="bottom">
                <i><BsFillVolumeDownFill/></i>
                <input type="range" />
                <i><BsMusicNoteList/></i>
                <i><FaDesktop/></i>
            </div>
        </div>
    )
}

export default TrackList;