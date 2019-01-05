import * as React from "react";
import AddDvd from './add-dvd/addDvd';
import AddBook from './add-book/addBook';

interface IAddItemStates{
  selectedItemType : string
}

class AddItem extends React.Component<any,IAddItemStates> {

  constructor(props){
    super(props);
    this.state = {
      selectedItemType :'Book'
    }
  }

  private onChangeItemType(itemType:string){
    this.setState({
      selectedItemType:itemType
    });
  }

  public render() {
    return (
      <div>
        <form>
        <div className="row">
          <div className="col-25">
            <label>Item Category</label>
          </div>
          <div className="col-75">
            <select id="itemType" name="itemType" onChange={(e)=>{this.onChangeItemType(e.target.value)}}>
              <option value="Book">Book</option>
              <option value="DVD">DVD</option>
            </select>
          </div>
        </div>
      </form>

      {
        this.state.selectedItemType === 'DVD' && 
          <AddDvd/>
      }

      {
        this.state.selectedItemType === 'Book' && 
          <AddBook/>
      }
      </div>
      
    );
  }
}

export default AddItem;
