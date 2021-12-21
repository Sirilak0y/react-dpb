import React, {useEffect, useState} from 'react';
import '../App.css';
import LOGOIT from '../LOGOIT.png';


const Header = () => {
    const [activeTab, setActiveTab] = useState("LogIn");
    return(
        <div className="header">
            <p className="logo">
            <img src={LOGOIT} alt="LOGOIT" /> ผู้ดูแล</p>
        </div>
    )
}

export default Header