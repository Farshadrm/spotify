import React from "react";
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import MenuList from "./MenuList";
import Menu from "./Menu";
import MenuPlayList from "./MenuPlayList";

import PlayList from './PlayList'
import TrackList from "./TrackList";

const LeftMenu = () => {
    const menuList = MenuList;
    const playList = PlayList;   
    return (
        <>
            <div className="LeftMenu">
                <div className="logoContainer">
                    <i>
                        <FaSpotify />
                    </i>
                    <h2>Spotify</h2>
                    <i>
                        <FaEllipsisH />
                    </i>
                </div>
                <div className="searchBox">
                
                    <input type="text" placeholder="Search..." />
                    <i className="searchIcon"> <BiSearchAlt/> </i>
                </div>                               
                    <div><Menu title ={'Menu'} menuObject={menuList}/></div>
                    <div><MenuPlayList title ={'PLAYLIST'} playListItems={PlayList}/></div>
                    <div><TrackList/></div>
            </div>
            
        </>
    );
};

export default LeftMenu;
