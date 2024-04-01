import { AiFillStar } from "react-icons/ai";
import bannerimg from '../img/bannerimg.jpg'
import {FaEllipsisH , FaHeadphones , FaCheck} from 'react-icons/fa'
const Banner=()=>{
    return(
        <div className="banner">
            <img src={bannerimg} alt="" className="bannerImg"/>
            <div className="content">
                <div className="breadCrump">
                    <p>
                        Home <span>/Popular Artist</span>
                    </p>
                    <i>
                        <FaEllipsisH/>
                    </i>
                </div>

                <div className="artist">
                    <div className="left">
                        <div className="name">
                            <h2>A-Ha</h2>
                            <i className="star"><AiFillStar/></i>
                        </div>

                        <p>
                            <i><FaHeadphones/></i>
                            11,184,1811
                            <span>Monthly Listeners</span>
                        </p>
                    </div>



                    <div className="right">
                        <a href="">Play</a>
                        <a href=""><i><FaCheck/></i> Following</a>
                    </div>
                </div>

            </div>
                <div className="bottomLayer"></div>
            
        </div>
        
    )
}

export default Banner;