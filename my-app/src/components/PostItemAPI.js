import React from "react"
import css from "./css/PostItem.module.css";


function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            const {id, type, user,webformatURL, tags} = post
            return <div className={css.SearchItem} key={id}>
                <p>{id}</p>
                <p>{user}</p>
                <p>{type}</p>
                <img src={webformatURL} alt="random"/>
                <p>{tags}</p>
            </div>
            }
        )
    )
}

export default PostItemAPI