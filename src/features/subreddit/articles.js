import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchArticles } from "./subredditSlice";
import Article from "./article";

const Articles = () =>{
    const subredditState = useSelector(state => state.subreddit);
    const { subreddit, articles } = subredditState;
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchArticles(subreddit));
    },[subreddit]);

    return(
        <div className="articles">
            {
                (articles != null) ? articles.map( (article, index) => <Article key={index} article={article} /> ) : <p></p>
            }
        </div>
    );
}

export default Articles;