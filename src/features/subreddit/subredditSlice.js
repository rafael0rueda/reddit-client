import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditArticles } from '../../API/reddit';


const initialState = {
    subreddit: 'popular',
    articles: [],
    prevId: ''
}
//const dispatch = useDispatch();

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers:{
        setSubreddit(state, action){
            state.subreddit = action.payload;
        },
        getArticles(state, action){
            state.articles = action.payload;
            //console.log(state.articles);
        },
        toggleShowComments(state, action){
            state.articles.forEach(article => {
                if(article.id == action.payload.id){
                    article.showComments = action.payload.show;
                }
                return;
            })
        },
        setPreId(state,action){
            state.prevId = action.payload;
        }
    }
})

export default subredditSlice.reducer;

export const { setSubreddit, getArticles, toggleShowComments,setPreId } = subredditSlice.actions;

export const fetchArticles = (subreddit) => async (dispatch) => {
    try {
        const articles = await getSubredditArticles(subreddit);
        console.log(`${articles}`);
        if(articles === undefined){
            dispatch(getArticles([]));
            return;
        }
        const articlesAddShow = articles.map(article => ({
            ...article,
            showComments: false
        }))
        dispatch(getArticles(articlesAddShow));
    } catch (error) {
        console.log(error)
    }
   
};

const selectArticles = state => state.subreddit.articles;