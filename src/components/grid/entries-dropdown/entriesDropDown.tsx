import * as React from 'react';


interface IEntriesProps {
    values:string[];
    onPageSizeSelect:(pageNumber:number) => void;
}
class EntriesDropDown extends React.Component<IEntriesProps,{}>{

    private getOptionValues = () => {
        return this.props.values.map(value => {
            return ( 
                <option value={value}>{value}</option>
            );
        });
    }


    private onPageSizeSelect(e){
        const page = e.target.value;
        this.props.onPageSizeSelect(page);
    }



    render(){
        return (
        <div className="col-sm-6">
            <div className="dataTables_length" id="example1_length">
              <label>
                Show 
                <select name="example1_length" aria-controls="example1" className="form-control input-sm" onChange={(e)=>{this.onPageSizeSelect(e)}}>
                  {this.getOptionValues()}
                </select> entries
              </label>
            </div>
        </div>
        );
    }
}

export default EntriesDropDown;