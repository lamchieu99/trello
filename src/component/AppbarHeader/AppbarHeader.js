import React from 'react';
import { FaBuromobelexperte, FaHouseDamage, FaInfoCircle, FaPlus, FaRegBell, FaSearch } from "react-icons/fa";
import './AppbarHeader.scss';

function AppbarHeader(props) {
    return (
        <header className="trello__header">
            <div className=" header__left">
                <button className="header__hover"> <FaBuromobelexperte /></button>
                <button className="header__hover"> <FaHouseDamage /></button>
                <div className=" header__input">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <FaSearch className="icon__search" /></div>
            </div>
            <div className="header__center"></div>
            <div className="header__right">
                <button className="header__hover"><FaPlus /></button>
                <button className="header__hover">
                    <FaInfoCircle />
                </button >
                <button className="header__hover"><FaRegBell /></button>
            </div>
        </header>
    )
}

export default AppbarHeader

