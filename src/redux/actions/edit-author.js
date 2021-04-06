export const editAuthor = (authorData, docId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log('edit author', authorData, docId);
        firestore.collection('authors').doc(docId).set({
            ...authorData,
        }).then(() => {
            dispatch({
                type: 'EDIT_AUTHOR',
                payload: authorData
            })
        }).catch((err) => {
            dispatch({
                type: 'EDIT_AUTHOR_ERROR',
                payload: err,
            })
        });
    }
}

