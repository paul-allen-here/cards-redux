import * as types from '../constants/ActionTypes';

const initialState = {
    cardsPerPage: 6,
    counter: 6,
    showModal: false,
    buffer: {
        img: null,
        title: null,
        desc: null,
    },
    cards: []
}

const rootReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {
        case types.LOAD_DATA:
            newState = {...state};
            const cards = action.payload;
            if (cards) {
                newState.cards = cards;
            } else {
                newState.cards = [];
            }
            newState.showModal = false;
            newState.buffer.img = null;
            newState.buffer.title = null;
            newState.buffer.desc = null;
            return newState;
        case types.UPLOAD_PICTURE:
            newState = {...state};
            newState.buffer.img = action.payload;
            return newState;
        case types.TOGGLE_MODAL:
            newState = {...state};
            newState.showModal = !newState.showModal;
            return newState;
        default:
            return state;
    }
};
  
export default rootReducer;