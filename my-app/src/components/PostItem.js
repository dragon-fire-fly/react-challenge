import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            // Extra task destructuring 
            return <div className={css.SearchItem} >
            </div>
            }
        )
    )
}

export default PostItem