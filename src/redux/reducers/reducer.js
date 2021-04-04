const initialState = {
    books: [
        { id: 1, title: "Everithing is posible", author: 'James Brook', date: 2005 },
        { id: 2, title: "Life is good", authoe: 'Son', date: 2019 }
    ],
    booksLoaded: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_BOOK':
            console.log('add books', action.payload);
            return state;
        case 'CREATE_BOOK_ERROR':
            console.log('Create book error', action.err);
            return state;
        case 'EDIT_BOOK':
            console.log('edit book');
            return state;
        case 'DELETE_BOOK':
            console.log('delete book');
            return state;
        case 'DELETE_BOOK_ERROR':
            console.log('Create book error', action.err);
            return state;
        default:
            return state;
    }
}

export default reducer;