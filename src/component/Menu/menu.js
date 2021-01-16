import React, { Component } from 'react'
import MenuStyle from './menu.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Menu({showMenu, menu1, menu2, menu3, menu4, menuToggle}){
  console.log(showMenu);
  let showMenuEffect = {
    top: '-100%',
    left: '-150%',
    opacity: '0',
    borderRadius: '100%',
    transition: '1s all ease-in-out'
  }
  let linkEffect1 = {
    bottom: '-100%',
    opacity: '0',
    transition: '1s all ease-in-out'
  }
  let linkEffect2 = {
    bottom: '-100%',
    opacity: '0',
    transition: '1s all ease-in-out'
  }
  let linkEffect3 = {
    bottom: '-100%',
    opacity: '0',
    transition: '1s all ease-in-out'
  }
  let linkEffect4 = {
    bottom: '-100%',
    opacity: '0',
    transition: '1s all ease-in-out'
  }
  if (showMenu == true) {
    showMenuEffect = {
      top: '0',
      left: '0',
      borderRadius: '0',
      opacity: '1',
      transition: '1s all ease-in-out'
    }
    if (menu1 == true) {
      linkEffect1 = {
        bottom: '0',
        opacity: '1',
        transition: '1s all ease-in-out'
      }
    }
    if (menu2 == true) {
      linkEffect2 = {
        bottom: '0',
        opacity: '1',
        transition: '1s all ease-in-out'
      }

    }
    if (menu3 == true) {
      linkEffect3 = {
        bottom: '0',
        opacity: '1',
        transition: '1s all ease-in-out'
      }

    }
    if (menu4 == true) {
      linkEffect4 = {
        bottom: '0',
        opacity: '1',
        transition: '1s all ease-in-out'
      }
    }
  }
    return (
      <div style={showMenuEffect} className={MenuStyle.menu_box}>
        <div className={MenuStyle.menu_content}>
          <ul className={MenuStyle.menu_list}>
            <li className={MenuStyle.menu_li}><a style={linkEffect1} className={MenuStyle.menu_a}><Link onClick={menuToggle} className={MenuStyle.menu_link} to='/'>Accueil</Link></a></li>
            <li className={MenuStyle.menu_li}><a style={linkEffect2} className={MenuStyle.menu_a}><Link onClick={menuToggle} className={MenuStyle.menu_link} to='/Project'>Projet</Link></a></li>
            <li className={MenuStyle.menu_li}><a style={linkEffect3} className={MenuStyle.menu_a}><Link onClick={menuToggle} className={MenuStyle.menu_link} to='/About'>A Propos</Link></a></li>
            <li className={MenuStyle.menu_li}><a style={linkEffect4} className={MenuStyle.menu_a}><Link onClick={menuToggle} className={MenuStyle.menu_link} to='/Contact'>Contact</Link></a></li>
          </ul>
        </div>
      </div>
    )
}

export default Menu
