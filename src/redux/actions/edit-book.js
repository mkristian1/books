export const editBook = (bookData, docId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log('edit book', bookData, docId);
        firestore.collection('books').doc(docId).set({
            ...bookData,
        }).then(() => {
            dispatch({
                type: 'EDIT_BOOK',
                payload: bookData
            })
        }).catch((err) => {
            dispatch({
                type: 'EDIT_BOOK_ERROR',
                payload: err,
            })
        });
    }
}

