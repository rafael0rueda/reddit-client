import React from "react";
//Request subreddit info from the API
export const getSubredditArticles = async (subreddit) => {
    try{
        let url = `https://www.reddit.com/r/${subreddit}.json`;
        let response = await fetch(url);
        if (response.ok) {
          let json = await response.json();        
          return json.data.children.map((post) => post.data);
        }
    }catch(error){
        //console.log(error);
        return (
            <p>Error</p>
        )
    }
};