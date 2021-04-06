export const createAuthor = (author) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('authors').add({
            ...author
        }).then(() => {
            dispatch({
                type: 'CREATE_AUTHOR',
                payload: author.values
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_AUTHOR_ERROR',
                payload: err,
            })
        });
    }
}

