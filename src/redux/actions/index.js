export const booksLoaded = (books) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('books').add({
            ...books,
            created_at: new Date(),
            year: 2004,
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

