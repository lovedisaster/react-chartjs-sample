import React from 'react';
import PropTypes from 'prop-types';
import {CHARTTYPES} from "../App";
import logo from "./chart_icon.svg";
import "./Header.scss";

const Header = props => {
    return (
        <div className="header">
            <img className="logo" alt="logo" src={logo}/>
            <ul className="nav">
                <li onClick={() => props.setActiveChart(CHARTTYPES.LINE)} className={props.activeChart === CHARTTYPES.LINE ? "active" : ""}>Line chart</li>
                <li onClick={() => props.setActiveChart(CHARTTYPES.BUBBLE)} className={props.activeChart === CHARTTYPES.BUBBLE ? "active" : ""}>Bubble chart</li>
            </ul>
        </div>
    );
};

Header.propTypes = {
    setActiveChart: PropTypes.func,
    activeChart:PropTypes.string
};

export default Header;