import * as React from "react";
import TableComponent from "./table-component/tableComponent";
import EntriesDropDown from "./entries-dropdown/entriesDropDown";
import Pagination from "./pagination/pagination";
import './gridContainer.scss';
import { LibraryItem } from '../../modals/libraryItem';

interface IGridContainerProps{
    onItemClick:(isbn:string,type:string)=>void;
    tableRows:string[];
    tableData:any;
    tableHeading:string;
}
class GridContainer extends React.Component<IGridContainerProps,{}> {
    render(){
        console.log('Grid Container props ', this.props);
        return (
        <div className='box box-solid'>
            <div className="box-header">
                <h1 className="box-title text-center">{this.props.tableHeading}</h1>
            </div>
            <div className='box-body'>
                <div className={'dataTables_wrapper form-inline dt-bootstrap'}>
                    {/* <div className="row">
                        <EntriesDropDown values={['10','25','40','50']} onPageSizeSelect={(pageSize:number)=>{this.props.onPageSizeSelect(pageSize)}}/>
                    </div> */}
                    <div className="row">
                        <TableComponent 
                            tableRows={this.props.tableRows}
                            tableData = {this.props.tableData}
                            onItemSelect={this.props.onItemClick}
                        />
                    </div>
                    {/* <div className='row'>
                        <Pagination page={this.props.page} pageSize={this.props.pageSize} entries={this.props.entrieCount} valueCount={this.props.entrieCount}/>
                    </div> */}
                </div>
            </div>
          </div>
    );
  }
}

export default GridContainer;
