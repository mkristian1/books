import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loading from "../../loading/loading";

const AuthorDetails = ({ author }) => {

    if (author) {     
        return (
            <div className="authorDetails">             
                <h5>First Name: {author.first_name}</h5>
                <h5>Last Name: {author.last_name}</h5>              
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
    const authors = state.firestore.data.authors;
    console.log(state);
    const author = authors ? authors[id] : null
    console.log(id);
    return {
        author: author,
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'authors' }
    ]) 
)(AuthorDetails);