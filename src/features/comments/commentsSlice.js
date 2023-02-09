import { createSlice } from "@reduxjs/toolkit";
import { getCommetsArticle } from "../../API/reddit"

const initialState = {
    comments: [],
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        getComments(state, action){
            state.comments = action.payload;
            //console.log(state.comments);
        }
    }
});

export default commentsSlice.reducer;

export const { getComments } = commentsSlice.actions;

export const fetchCommentsArticle = (subreddit, idArticle) => async (dispatch) => {
    const comments = await getCommetsArticle(subreddit, idArticle);
    //console.log(comments);
    dispatch(getComments(comments));
}

export const selectComments = state => state.comments.comments;