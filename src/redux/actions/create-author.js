export const createAuthor = (author) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(author, 'ss');
        firestore.collection('authors').add({
            author_id: author.authorId,
            created_at: author.values.created_at,
            first_name: author.values.first_name,
            last_name: author.values.last_name
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

