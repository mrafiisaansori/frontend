import React from "react";
import logo from "../../assets/logo.png";
import {BiHomeAlt,BiUserCircle,BiCreditCardFront,BiPhone} from "react-icons/bi";

export default function Sidebar(){
    const menu = [
        {name:"Dashboard",icon:<BiHomeAlt/>},
        {name:"Biodata",icon:<BiUserCircle/>},
        {name:"Gaji",icon:<BiCreditCardFront/>},
        {name:"Pengumuman",icon:<BiPhone/>}
]
    return <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-6">
        <div className="flex flex-row item-center">
            <img src={logo} alt="logo" className="w-6 h-6"/>
            <div className="ml-2 font-bold">SISTEM PEGAWAI</div>
        </div>
        <div className="space-y-6">
        <div>
        <div className="mb-4 mt-10 text-indigo-700">Menu</div>
            <ul className="space-y-7"> 
            {
                menu.map((val, index) =>{
                    return <li key={index} className="mb-7 flex flex-row item-center text-gray-400">
                        <div className="mr-5 posisi-menu">{val.icon}</div>
                       <div className="top-0">{val.name}</div>
                    </li>
                })
            }
            </ul>
        </div>
        
        </div>
    </div>
}