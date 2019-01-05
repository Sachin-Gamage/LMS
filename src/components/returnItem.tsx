import * as React from 'react';

interface IReturnItemState{
    selectedItemType:string
}
class ReturnItem extends React.Component<IReturnItemState,any>{

    constructor(props){
        super(props);
        this.state = {
            selectedItemType:''
        }
    }

    private changeItemType(itemType: string){
        this.setState({
            selectedItemType:itemType
        });
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="col-25">
                        <label>ISBN</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="ISBN"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Date</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Date"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Returned By</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Name"/>
                    </div>
                </div>
                <div className="radio-inline">
                    <label>
                        <input type="radio" name="optradio" value="Book" onChange={(e)=>{this.changeItemType(e.target.value)}}/>Book
                    </label>
                </div>
                <div className="radio-inline">
                    <label>
                        <input type="radio" name="optradio" value="Dvd" onChange={(e)=>{this.changeItemType(e.target.value)}}/>Dvd
                    </label>
                </div>
                <div className="row">
                    <input type="submit" value="Update"/>
                </div>
            </form>
    );
    }
}

export default ReturnItem;