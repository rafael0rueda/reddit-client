import React from "react";

function Article(props) {
    const article = props.article;

    return (
        <article>
                <h3>{props.article.title}</h3>
                <h3>{article.author}</h3>
                <img src={article.thumbnail} />
        </article>
    )
}

export default Article;