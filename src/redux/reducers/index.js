const initialState = {
    books :[
        { id: 1, title: "Everithing is posible", author: 'James Brook',  date: 2005},
        { id: 2, title: "Life is good", authoe: 'Son', date: 2019 }
    ],
    booksLoaded : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            console.log('add books', action.payload);
        default:
            return state;
    }
}

export default reducer;