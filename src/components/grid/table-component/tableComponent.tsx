import * as React from "react";
import {LibraryItem} from '../../../modals/libraryItem';
interface ITableProps {
  tableRows: string[];
  tableData: any[];
  onItemSelect: (isbn: string,type: string) => void;
}
class TableComponent extends React.Component<ITableProps, {}> {
  private getTableHeading() {
    return this.props.tableRows.map(row => {
      return <th className="sorting_asc">{row}</th>;
    });
  }

  private getTableData() {
    return this.props.tableData.map(item => {
      return (
        <tr
          role="row"
          className="odd"
          onClick={() => {
            this.props.onItemSelect(item.isbn,item.type);
          }}
        >
          <td>{item.isbn}</td>
          <td>{item.type}</td>
          <td>{item.title}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="col-sm-12">
        <table
          id="example1"
          className="table table-bordered table-striped dataTable"
          role="grid"
          aria-describedby="example1_info"
        >
          <thead>
            <tr role="row">{this.getTableHeading()}</tr>
          </thead>
          <tbody>{this.getTableData()}</tbody>
        </table>
      </div>
    );
  }
}
export default TableComponent;
