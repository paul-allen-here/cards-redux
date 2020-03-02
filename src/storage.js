const storage = window.localStorage;


const storageMiddleware = store => next => action => {
    let cards = [];

    switch (action.type) {
        case "CONNECT_TO_STORAGE":
            cards = JSON.parse(window.localStorage.getItem("cards"));
            store.dispatch({ type: 'LOAD_DATA', payload: cards });
            break;
        case "CLEAR_DATA": 
            storage.clear();
            break;
        case "SAVE_CARD":
            let card = action.payload;
            console.log(card);
            cards = JSON.parse(window.localStorage.getItem("cards"));

            if (card) {
                card.id = cards ? cards.length : 0;
                if (!cards) { cards = [] }
                cards.push(card);
                try {
                    storage.setItem("cards", JSON.stringify(cards));
                    console.log(cards);
                    store.dispatch({ type: 'LOAD_DATA', payload: cards });
                } catch (e) {
                    alert("Local Storage is full, Please empty data");
                    // storage.clear();
                    // fires When localstorage gets full
                }
            }
            break;
        default:
            break;
    };

    return next(action);
};

export default storageMiddleware;