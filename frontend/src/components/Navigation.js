import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../static/images/testsgame.png"

const list_top = [
    { id: 1, title: "Lorem", path: "/" },
    { id: 2, title: "Ipsum", path: "/ipsum" },
    { id: 3, title: "Dolor", path: "/dolor" },
    { id: 4, title: "Sit Amet", path: "/sitAmet" },
    { id: 5, title: "Aliquip", path: "/aliquip" }
]

const list_bottom = [
    { id: 1, title: "Lorem", path: "/" },
    { id: 2, title: "Ipsum", path: "/ipsum" },
    { id: 3, title: "Dolor", path: "/dolor" },
]


const Navigation = () => {


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
                <li><i class="fas fa-search"></i></li>
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