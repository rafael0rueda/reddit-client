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
            <input type="text" className="input" value={subreddit} onChange={OnSubredditChange} placeholder="Search subreddit" />
        </>
    );
}

export default Subreddit;