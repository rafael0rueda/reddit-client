import React from "react";

function Article(props) {
    const article = props.article;

    return (
        <article>
                <h3>{props.article.title}</h3>
                <h3>{article.author}</h3>
                {
                    mediaDisplay(article)
                }      
        </article>
    )
}

export default Article;

//Find the type of media to be display
const mediaDisplay = (article) =>{
    if(article.is_video == true){
        return (<video src={article.media.reddit_video.fallback_url} type="video/mp4" width="300px" controls >Video not support</video>);
    }
    if(!isValidUrl(article.thumbnail)){
        return;
    }
    if(!article.is_reddit_media_domain){
        return (<img src={article.thumbnail}  />);
    }
    console.log(article.thumbnail);
    return (<img src={article.url_overridden_by_dest} width="300px" />);
    
};

const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}