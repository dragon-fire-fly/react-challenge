import React, { Component } from "react";
import css from "./css/Content.module.css";
// import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false
        }
    }

    getLoaded() {
        console.log("CDU called")
        setTimeout(() => {
            this.setState({
                isLoaded: true
            });
        }, 2000)
    }

    componentDidMount(){
        this.getLoaded()
    }
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                {this.state.isLoaded ? (<p>Loaded</p>) : (<Loader />)}
                </div>
            </div>
        )
    }
}

export default Content