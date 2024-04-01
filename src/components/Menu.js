import { useState, useEffect } from "react";


const Menu = ({ title, menuObject }) => {

    const[activeId,setActiveId]= useState(0)


    return (
        <>
            <div className="MenuContainer">
                <p className="title">{title}</p>
                <ul>
                    {menuObject &&
                        menuObject.map((menu) => (
                            <li onClick={()=>{setActiveId(menu.id)}} className={activeId === menu.id ? 'active':''} key={menu.id}>
                                
                                <a href="#">
                                    <i>{menu.icon}</i>
                                    <span>{menu.name}</span>
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default Menu;
