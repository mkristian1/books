import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loading from "../../loading/loading";

const BookDetails = ({ book, authors }) => {

    if (book && authors) {
        let authorId = authors.findIndex((a) => +a.author_id === +book.author_id);
        return (

            <div className="bookDetails">
                <h1>{book.title}</h1>
                <img className="mb-4" src={book.img} alt={book.title} />
                <h5>Author: {authors[authorId].last_name} {authors[authorId].first_name} </h5>
                <p>Year: {book.year}</p>
            </div>
        )
    } else {
        return (
            <Loading />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const books = state.firestore.data.books;
    const authors = state.firestore.ordered.authors;
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