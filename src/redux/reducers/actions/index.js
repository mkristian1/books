export const booksLoaded = (books) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({
            type: 'BOOKS_LOADED',
            payload: books
        })
    }
}

