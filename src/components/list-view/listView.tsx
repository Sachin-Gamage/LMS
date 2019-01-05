import * as React from 'react';
import GridContainer from '../grid/gridContainer';
import { connect } from 'react-redux';
import { getAllItems } from '../../actions/libraryItemActions';
import { isBoolean } from 'util';
import { getBook } from '../../actions/bookActions';
import ItemView from '../item-view/itemView';

interface IListViewState{
    openSlidePane:boolean
}

class ListView extends React.Component<any,IListViewState>{

    constructor(props){
        super(props);
        this.state = {
            openSlidePane:false
        }
    }

    componentDidMount(){
        this.getLibraryItems();
    }

    private async getLibraryItems(){
        await this.props.dispatch(getAllItems());
    }

    private onItemClick(isbn:string, type:string){
        if(type.toLowerCase() === 'book'){
            this.props.dispatch(getBook(isbn));
        }

        this.setState({
            openSlidePane:true
        });
    }

    render(){
        return(
            <div>
                {
                    this.props.libraryItems && this.props.libraryItems.length !== 0 &&
                        <GridContainer 
                            tableRows = {["ISBN","Item Type", "Item Title"]} 
                            tableData={this.props.libraryItems}
                            tableHeading={"Library Items"}
                            onItemClick={(isbn: string, type:string)=>{this.onItemClick(isbn,type)}}
                        />
                 }
                
                {
                    this.props.bookData && 
                    
                    <ItemView open={this.state.openSlidePane}/>
                }

                
            </div>
        );
    }
}

const mapStatesToProps = states => ({
    libraryItems: states.libraryItems.items,
    bookData:states.book.bookData
});



export default connect(mapStatesToProps)(ListView);