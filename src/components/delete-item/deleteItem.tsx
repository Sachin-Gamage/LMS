import * as React from 'react';
import { deleteBook } from 'src/actions/bookActions';
import { deleteDvd } from 'src/actions/dvdActions';
import { connect } from 'react-redux'; 


interface IDeleteItemState{
    selectedItemType:string;
    isbn: string;
}


class DeleteItem extends React.Component<any,IDeleteItemState>{

    constructor(props) {
        super(props);
        this.state = {
            selectedItemType: 'book',
            isbn: ''
        }
    }

    private changeItemType(itemType: string) {
        this.setState({
            selectedItemType: itemType
        });
    }

    private handleDeleteItem = () => {
        if (this.state.selectedItemType.toLowerCase() === 'book') {
            debugger
            this.props.dispatch(deleteBook(this.state.isbn));
        } else {
            this.props.dispatch(deleteDvd(this.state.isbn));
        }
    }

    render(){
        return <div>
            <form>
              <div className="row">
                <div className="col-25">
                  <label>Item Category</label>
                </div>
                <div className="col-75">
                  <select id="itemType" name="itemType" onChange={e => {
                      this.changeItemType(e.target.value);
                    }}>
                    <option value="Book">Book</option>
                    <option value="DVD">DVD</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-75">
                  <input type="text"  placeholder="ISBN" onChange={(e)=>{this.setState({isbn:e.target.value})}}/>
                </div>
              </div>
              <div className="row">
                <div className="col-75">
                  <input type="button" value="Delete" onClick={this.handleDeleteItem}/>
                </div>
              </div>
            </form>
          </div>;
          // <form>
          //     <div className="row">
          //         <div className="col-25">
          //             <label>ISBN</label>
          //         </div>
          //         <div className="col-75">
          //             <input type="text" id="fname" name="firstname" placeholder="ISBN"/>
          //         </div>
          //         <div className="radio-inline">
          //             <label>
          //                 <input type="radio" name="optradio" value="Book" onChange={(e)=>{this.changeItemType(e.target.value)}}/>Book
          //             </label>
          //         </div>
          //         <div className="radio-inline">
          //             <label>
          //                 <input type="radio" name="optradio" value="Dvd" onChange={(e)=>{this.changeItemType(e.target.value)}}/>Dvd
          //             </label>
          //         </div>
          //     </div>
          //     <div className="row">
          //         <input type="submit" value="Delete Item"/>
          //     </div>
          // </form>
    };
}
const mapStateToProps = state => ({
  success: state.book.bookDeleteSuccess,
  err: state.book.bookDeleteError
});

export default connect(mapStateToProps)(DeleteItem);
