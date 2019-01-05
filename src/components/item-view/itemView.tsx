import * as React from 'react';
import SlidingPane from "react-sliding-pane";
import { LibraryItem } from '../../modals/libraryItem';
import {connect} from 'react-redux';

interface IItemViewState{
    isOpen:boolean
}
class ItemView extends React.Component<any,IItemViewState>{

    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }

    componentDidMount() {
        this.setState({
          isOpen: this.props.open
        });
      }

    private getRetailerItemDetails(){
        const libraryItem = this.props.libraryItem;
        return (
            <div>
                <ul className='detail-list'>
                    
                    <li>ISBN <span>{libraryItem.ISBN}</span></li>
                    <li>Item Title
                        <span>{libraryItem.title}</span>
                    </li>
                    <li>Item Type <span>{libraryItem.type}</span></li>
                    <li>Availablity <span>{libraryItem.reader ? 'Not Available' : 'Available'}</span></li>
                </ul>
                <div className='row'>
                    <div className='col-md-6'>
                        <button className="btn btn-info">Approve</button>
                        <button className="btn btn-danger">Deny</button>
                    </div>
                </div>
            </div>);
    }

    render(){
        return(
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={this.state.isOpen}
                from='right'
                title='Retailer Details.'
                //subtitle='Optional subtitle.'
                onRequestClose={() => {this.setState({ isOpen: false });}}
                >
                <div>
                { 
                    this.props.libraryItem &&
                    this.getRetailerItemDetails()
                }
                </div>
            </SlidingPane>
        );
    }
}

const mapStateToProps = state => ({
    libraryItem: state.book.bookData
});

export default connect(mapStateToProps) (ItemView);