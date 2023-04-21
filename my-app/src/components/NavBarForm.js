import React, { Component } from 'react'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false:true
        }), () => console.log(this.state.isLoggedIn))
        
    }

    render() {
        return (
            <NavBarChild 
                isLoggedIn={this.state.isLoggedIn}
                clickHandler={this.clickHandler}
            />
        )
    }
}

export default NavBarForm