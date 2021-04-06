const initialState = {
    books: [
        { id: 1, title: "Everithing is posible", author: 'James Brook', date: 2005 },
        { id: 2, title: "Life is good", authoe: 'Son', date: 2019 }
    ],
    authors: [
        { id: 1, first_name: 'test', last_name: 'Test' }
    ],
    book: [],
    author: [],
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
        case 'EDIT_BOOK_ERROR':
            console.log('edit book');
            return state;
        case 'EDIT_AUTHOR':
            console.log('edit author');
            return state;
        case 'EDIT_AUTHOR_ERROR':
            console.log('edit author error');
            return state;
        case 'DELETE_BOOK':
            console.log('delete book');
            return state;
        case 'DELETE_BOOK_ERROR':
            console.log('Create book error', action.err);
            return state;
        case 'DELETE_AUTHOR':
            console.log('Delete Author');
            return state;
        case 'DELETE_AUTHOR_ERROR':
            console.log('Delete Author');
            return state;
        case 'CREATE_AUTHOR':
            console.log('Create author');
        case 'CREATE_AUTHOR_ERROR':
            return state;
        default:
            return state;
    }
}

export default reducer;