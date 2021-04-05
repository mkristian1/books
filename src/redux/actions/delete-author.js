export const deleteAuthor = (authorId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('authors').doc(authorId).delete().then(() => {
            dispatch({
                type: 'DELETE_BOOK',
                payload: authorId
            })
        }).catch((err) => {
            dispatch({
                type: 'DELETE_BOOK_ERROR',
                payload: err,
            })
        });
    }
}