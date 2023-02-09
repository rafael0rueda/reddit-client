import React,  {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/comments";
import { toggleShowComments, setPreId } from "./subredditSlice";

function Article(props) {
    const article = props.article;
    const dispatch = useDispatch();
    let prevComments = useSelector(state => state.subreddit.prevId);

    //Find the type of media to be display
    function mediaDisplay(article) {
        if (article.is_video == true) {
            return (<video src={article.media.reddit_video.fallback_url} type="video/mp4" width="300px" controls>Video not support</video>);
        }
        if (!isValidUrl(article.thumbnail)) {
            return;
        }
        if (!article.is_reddit_media_domain) {
            return (<img src={article.thumbnail} />);
        }
        return (<img src={article.url_overridden_by_dest} />);
    };

    const OnClickLoadComments = (bool) =>{
        const payload = {
            show: bool,
            id: article.id
        }
        dispatch(toggleShowComments(payload));
        //Change the show state of the previous articles comments 
        if(bool == true && prevComments !== article.id){
            const payload1 = {
                show: false,
                id: prevComments
            }
            console.log(payload1);
            dispatch(toggleShowComments(payload1));   
        }
        dispatch(setPreId(article.id));
    };

    return (
        <article>
                <h3>{article.title}</h3>
                <h4>Posted by {article.author}</h4>
                {
                    mediaDisplay(article)
                }
                <div className="buttons">
                    <button type="button" className="load-comments" aria-label="Show Comments" onClick={() => OnClickLoadComments(true)} >Load Comments</button>
                    <button type="button" className="load-comments" aria-label="Show Comments" onClick={() => OnClickLoadComments(false)} >Hide Comments</button>
                </div>
                
                {article.showComments && (<Comments article={article} />)}
        </article>
    )
    
};

export default Article;


const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
};