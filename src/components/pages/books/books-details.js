import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loading from "../../loading/loading";

const BookDetails = ({ book, authors }) => {
    //let authorId = authors.findIndex((a) => a.id === +book.author_id);

    if (book) {
        return (

            <div className="bookDetails">
                <h1>{book.title}</h1>
                <h3>Author: </h3>
                <p>Year: {book.year}</p>
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    const id = ownProps.match.params.id;
    const books = state.firestore.data.books;
    const authors = state.firestore.data.authors;
    const book = books ? books[id] : null
    return {
        book: book,
        authors: authors,
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books' },
        { collection: 'authors' }
    ])
)
    (BookDetails);