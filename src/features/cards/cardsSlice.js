import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const addedCard = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back,
            };
            state.cards[action.payload.id] = addedCard;
        }
    }
})

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;