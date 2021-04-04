export const deleteBook = (bookId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('books').doc(bookId).delete().then(() => {
            dispatch({
                type: 'DELETE_BOOK',
                payload: bookId
            })
        }).catch((err) => {
            dispatch({
                type: 'DELETE_BOOK_ERROR',
                payload: err,
            })
        });
    }
}