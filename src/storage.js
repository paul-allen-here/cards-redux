const storage = window.localStorage;
let cards = [];

const storageMiddleware = store => next => action => {
    switch (action.type) {
        case "CONNECT_TO_STORAGE":
            cards = JSON.parse(window.localStorage.getItem("cards"));
            store.dispatch({ type: 'LOAD DATA', payload: cards });
            break;
        case "CLEAR_DATA": 
            storage.clear();
            break;
        case "SAVE_CARD":
            let card = action.payload;
            console.log(card);
            cards = JSON.parse(window.localStorage.getItem("cards"));
            if (card && cards) {
                card.id = cards.length;
                cards.push(card);
                try {
                    storage.setItem("cards", JSON.stringify(cards));
                    store.dispatch({ type: 'LOAD DATA', payload: cards });
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