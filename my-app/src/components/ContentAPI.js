import React, { Component } from "react";
import css from "./css/Content.module.css";
import savedPosts from "../posts.json";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from 'axios'
import API_KEY from "../secrets.js";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount(){
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        });
    }

    inputChangeHandler = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = this.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(name)
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
                {this.state.isLoaded ? (<p><PostItemAPI savedPosts={this.state.posts}/></p>) : (<Loader />)}
                </div>
            </div>
        )
    }
}

export default Content