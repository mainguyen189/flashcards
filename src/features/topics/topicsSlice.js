import { createSlice } from '@reduxjs/toolkit';

// slices
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state,action) => {
            const addedTopic = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                //quiz id associated with the topic
                quizIds: []
            };

            state.topics[action.payload.id] = addedTopic;
        },
        // add quiz' id to quizid array
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
});

//selector
export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

