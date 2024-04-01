import { FaUsers } from "react-icons/fa";
import "../Styles/MainContainer.css";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import AudioList from "./AudioList";

const MainContainer = () => {
    const [active, setActive] = useState(0);



    
    return (
        <div className="mainContainer">
            <Banner />
            <div className="menuList">
                <ul >
                    <li onClick={()=>{setActive(1)}} className ={active === 1 ? 'active':''}>
                        <a href="#" >Popular</a>
                    </li>
                    <li onClick={()=>{setActive(2)}} className ={active === 2 ? 'active':''}>
                        <a href="#">Albums</a>
                    </li>
                    <li onClick={()=>{setActive(3)}} className ={active === 3 ? 'active':''}>
                        <a href="#">Songs</a>
                    </li>
                    <li onClick={()=>{setActive(4)}} className ={active === 4 ? 'active':''}>
                        <a href="#">Fans</a>
                    </li>
                    <li onClick={()=>{setActive(5)}} className ={active === 5 ? 'active':''}>
                        <a href="#">About</a>
                    </li>
                </ul>
                <p>
                    <i>
                        <FaUsers />
                    </i>
                    12.3M
                    <span>Followers</span>
                </p>
            </div>

            <AudioList/>
        </div>
    );
};

export default MainContainer;
