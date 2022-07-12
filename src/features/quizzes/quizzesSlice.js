import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: [cardIds]
            }
        }
    }
})

// thunk to add quiz and to the related topic
export const addQuizAndQuizId = payload => {
    const { quizId, name, topicId, cardIds } = payload;
    return (dispatch) => {
        console.log('addquizandquizid: ', quizId, name, topicId, cardIds);
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId({ quizId: quizId, topicId: topicId } ));
    }
};

// selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
// actions
export const { addQuiz } = quizzesSlice.actions

export default quizzesSlice.reducer;