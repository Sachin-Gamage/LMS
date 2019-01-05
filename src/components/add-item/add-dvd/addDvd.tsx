import * as React from 'react';
import { DVD } from '../../../modals/dvd';



class AddDvd extends React.Component<any,DVD>{

    openPopups() {
        if (this.props.success) {
            this.props.dispatch(openPopup('Added book successfully', 'success'));
        }

        if (this.props.err) {
            this.props.dispatch(openPopup('Book adding fail', 'error'));
        }
    }

    private handleOnSubmit() {
        let book: Book = new Book();

        book.$ISBN = this.state.ISBN;
        book.$title = this.state.title;
        book.$sector = this.state.title;
        book.$authors = this.state.authors.split(',');
        book.$publisher = this.state.publisher;
        book.$pubDate = this.state.pubDate;
        book.$noOfPages = parseInt(this.state.pages);
        this.props.dispatch(addBook(book));

    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-25">
                        <label >ISBN</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="ISBN"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Title of the Book</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Sector</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Sector"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Available Languages</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Available Languages"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Available SubTitles</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Available SubTitles"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Producer</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Producer"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Actors</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Actors"/>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Add Item"/>
                </div>
            </div>
        );
    }
}

export default AddDvd;