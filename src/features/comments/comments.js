import React, { useEffect } from "react";
import { fetchCommentsArticle,getComments } from "./commentsSlice";
import { useDispatch } from "react-redux";
import { selectComments } from "./commentsSlice"
import { useSelector } from "react-redux";

const Comments = (props) =>{
    const { article } = props;
    const stateComments = useSelector(selectComments);
    const comments = stateComments;
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getComments([]));
        dispatch(fetchCommentsArticle(article.subreddit, article.id));
    },[article.showComments]);
    
    return(
        <>
            {
                comments.map((comment, index) => {
                    return (
                        <div className="comment" id={index}>
                            <p className="author">{comment.author}</p>
                            <p className="comment-body">{comment.body}</p>
                        </div>
                    )
                    
                })
            }
        </>
  
    )
};

export default Comments;