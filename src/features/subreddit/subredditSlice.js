import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditArticles } from '../../API/reddit';


const initialState = {
    subreddit: 'popular',
    articles: []
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
        }
    }
})

export default subredditSlice.reducer;

export const { setSubreddit, getArticles } = subredditSlice.actions;

export const fetchArticles = (subreddit) => async (dispatch) => {
    const articles = await getSubredditArticles(subreddit);
    //console.log(articles);
    dispatch(getArticles(articles));
};

const selectArticles = state => state.subreddit.articles;