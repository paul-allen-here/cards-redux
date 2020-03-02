import image from './images/image.json';

// JSON.parse(window.localStorage.getItem("cast")); // get
// window.localStorage.setItem('cards', JSON.stringify(cards));

const img = image.image;

// {id: 1, title: 'SemRush 101', desc: 'Default info', image: img}, 
// {id: 2, title: 'SemRush 101', desc: 'Default info', image: img}, 
// {id: 3, title: 'SemRush 101', desc: 'Default info', image: img}, 
// {id: 4, title: 'SemRush 101', desc: 'Default info', image: img}, 
// {id: 5, title: 'SemRush 101', desc: 'Default info', image: img}

const initialState = {
    counter: 6,
    showModal: false,
    buffer: {
        img: null,
        title: null,
        desc: null,
    },
    cards: []
}

let newState;

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST":
            return state;
        case "LOAD_DATA":
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
        case "UPLOAD_PICTURE":
            newState = {...state};
            newState.buffer.img = action.payload;
            return newState;
        case "TOGGLE_MODAL":
            newState = {...state};
            newState.showModal = !newState.showModal;
            return newState;
        default:
            return state;
    }
};
  
export default rootReducer;