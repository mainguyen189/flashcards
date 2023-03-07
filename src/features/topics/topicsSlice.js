import { createSlice } from '@reduxjs/toolkit';

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
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

