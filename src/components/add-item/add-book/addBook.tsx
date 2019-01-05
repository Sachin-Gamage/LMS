import * as React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../../actions/bookActions';
import { Book } from '../../../modals/book';
import { openPopup } from '../../../actions/popUpActions';


interface IAddBookStates{
  ISBN?:string;
  title?:string;
  sector?:string;
  authors?:string;
  publisher?: string;
  pubDate?: string;
  pages?:string;
}

class AddBook extends React.Component<any,IAddBookStates>{

  constructor(props){
    super(props);
    this.state = {
      ISBN:'',
      title:'',
      sector:'',
      authors:'',
      publisher:'',
      pubDate:'',
      pages:''
    }
  }

  openPopups(){
    if(this.props.success){
      this.props.dispatch(openPopup('Added book successfully','success'));
    }

    if(this.props.err){
      this.props.dispatch(openPopup('Book adding fail','error'));
    }
  }

  private handleOnSubmit(){
    let book:Book = new Book();

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
      this.openPopups();
        return(
        <div>
            <div className="row">
              <div className="col-25">
                <label>ISBN</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="ISBN" onChange={(e)=>{this.setState({ISBN:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Title of the Book</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Title" onChange={(e)=>{this.setState({title:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Sector</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Sector" onChange={(e)=>{this.setState({sector:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label >Authors</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Authors" onChange={(e)=>{this.setState({authors:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Publisher</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Publisher" onChange={(e)=>{this.setState({publisher:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Publication Date</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Publication Date" onChange={(e)=>{this.setState({pubDate:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>No Of Pages</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="No Of Pages" onChange={(e)=>{this.setState({pages:e.target.value})}}/>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Add Item" onClick={() => {this.handleOnSubmit()}}/>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  success: state.book.success,
  err:state.book.err
});

export default connect(mapStateToProps)(AddBook);