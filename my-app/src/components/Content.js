import React, { Component } from "react";
import css from "./css/Content.module.css";
import savedPosts from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
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
        this.setState({
            posts: savedPosts.savedPosts
        })
    }

    inputChangeHandler = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = savedPosts.savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })
        console.log(filteredPosts)
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search</label>
                        <input
                            type="search"
                            id="searchInput"
                            placeholder="By Author"
                            onChange={(event) => this.inputChangeHandler(event)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                {this.state.isLoaded ? (<p><PostItem savedPosts={this.state.posts}/></p>) : (<Loader />)}
                </div>
            </div>
        )
    }
}

export default Content