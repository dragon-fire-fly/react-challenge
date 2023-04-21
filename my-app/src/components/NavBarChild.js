import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";

function NavBarChild(props){
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {props.isLoggedIn ? (
            <button onClick={props.clickHandler}>Login</button>) : (
            <div>
                <form>
                    <label htmlFor='username'>username</label>
                    <input id="username"></input>
                    <label htmlFor='password'>password</label>
                    <input id="password"></input>
                    <button onClick={props.clickHandler}>Submit</button>
                </form>
            </div>
            ) }
        </div>
    )
}

export default NavBarChild