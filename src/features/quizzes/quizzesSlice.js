import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const addedQuiz = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardId: action.payload.cardId,
            };

            state.quizzes[action.payload.id] = addedQuiz;
        }
    }
})

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;