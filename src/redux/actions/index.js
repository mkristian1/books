export const booksLoaded = (books) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('books').add({
            ...books,
        }).then(() => {
            dispatch({
                type: 'CREATE_BOOK',
                payload: books
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_BOOK_ERROR',
                payload: err,
            })
        });
    }
}

