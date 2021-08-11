import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
 import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [{
    title: "Home",
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
},
{
    title: "Cold Storage",
    path: '/coldStorage',
    icon: <GiIcons.GiThermometerCold />,
    className: 'nav-text'
},
{
    title: "Traffic",
    path: '/traffic',
    icon: <FaIcons.FaTruckLoading />,
    className: 'nav-text'
},
{
    title: "Transport",
    path: '/transport',
    icon: <FaIcons.FaTruckMoving />,
    className: 'nav-text'
},
{
    title: "Logout",
    path: '/',
    icon: <AiIcons.AiOutlineLogout />,
    className: 'nav-text'
},]