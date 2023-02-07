import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSubreddit } from "./subredditSlice";

const Subreddit = () => {
    const subredditState = useSelector(state => state.subreddit);
    const { subreddit, articles } = subredditState;
    const dispatch = useDispatch();

    const OnSubredditChange = (e) =>{
        dispatch(setSubreddit(e.target.value));
    }

    return(
        <>
            <h3>Subreddit: </h3>
            <input type="text" className="input" value={subreddit} onChange={OnSubredditChange} />
        </>
    );
}

export default Subreddit;