import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css";
import savedPosts from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts.savedPosts);
        }, 2000);
    }, [])

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })

        setFetchedPosts(filteredPosts);
    }


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
                        onChange={(event) => {handleChange(event)}}
                    />
                    <h4>posts found {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
            {isLoaded ? (<p><PostItem savedPosts={fetchedPosts}/></p>) : (<Loader />)}
            </div>
        </div>
    )
}

export default ContentHooks