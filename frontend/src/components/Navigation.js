import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../static/images/testsgame.png"

const list_top = [
    { id: 1, title: "Aktualności", path: "/" },
    { id: 2, title: "Dyskusje", path: "/diskusion" },
    { id: 3, title: "Sieć kontaktów", path: "/network" },
    { id: 4, title: "FAQ", path: "/faq" },
    { id: 5, title: "Kontakt", path: "/contact" }
]

const list_bottom = [
    { id: 1, title: "BigMoney", path: "/bigmoney" },
    { id: 2, title: "SnakeGame", path: "/snakegame" },
    { id: 3, title: "Shotgun", path: "/shotgun" },
]

const Navigation = (props) => {


    const menu_top = list_top.map(item => (
        <li key={item.id}> <NavLink key={item.id} to={item.path} >{item.title}</NavLink></li>
    ))

    const menu_bottom = list_bottom.map(item => (
        <li key={item.id}> <NavLink key={item.id} to={item.path} >{item.title}</NavLink></li>
    ))
    return (
        <>
        <div className="nav_top">
            <ul>
                {menu_top}
                <li><i class="fas fa-search" onClick={props.modal}></i></li>
                <li><i class="fas fa-user-alt" onClick={props.login}></i></li>
            </ul>
        </div>
        <div className="nav_bottom">
            <div class="logo">
                <img src={logo}></img>
            </div>
            <ul>
                {menu_bottom}
            </ul>
        </div>
        </>
    )
}

export default Navigation;