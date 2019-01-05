import * as React from 'react';
import * as classnames from 'classnames';

interface IPaginationProps{
    page:number,
    pageSize:number;
    entries:number;
    valueCount:number;
}

interface IPaginationStates{
    previousEnabled:boolean,
    nextEnabled:boolean
}

class Pagination extends React.Component<IPaginationProps,IPaginationStates>{

    constructor(props){
        super(props);
        this.state = {
            nextEnabled:false,
            previousEnabled:false
        }
        this.setPaginationNextState();
        this.setPaginationPreviousState();
    }


    private getPaginationInfo(){
        return `Showing ${this.props.page} to ${this.props.valueCount} of ${this.props.entries} entries`;
    }

    private getPaginationSlider(){
        let count = 0;
        let remaining = 0;
        const pagination = [];
        while(count <= remaining ){
            count++;
            remaining = (this.props.entries - this.props.pageSize) - remaining;
            console.log(count);
            pagination.push (
                <li className="paginate_button ">
                    <a aria-controls="example1" data-dt-idx={count}>
                        {count}
                    </a>
                </li>
            );
        }
        return pagination;
    }

    private setPaginationNextState(){
        if(this.props.entries <= (this.props.page * this.props.pageSize)){
            this.setState({
                nextEnabled:false
            });
        }else{
            this.setState({
                nextEnabled:true
            });
        }
    }

    private setPaginationPreviousState(){
        if(this.props.page === 1){
            this.setState({
                previousEnabled:false
            });
        }else{
            this.setState({
                previousEnabled:true
            });
        }
    }

      componentWillReceiveProps(){
        this.setPaginationNextState();
        this.setPaginationPreviousState();
    }

    render(){
        return <div>
            <div className="col-sm-5">
              <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                {this.getPaginationInfo()}
              </div>
            </div>
            <div className="col-sm-7">
              <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                <ul className="pagination">
                        <li className={classnames("paginate_button previous",{'disabled':!this.state.previousEnabled})} id="example1_previous">
                        <a  aria-controls="example1" data-dt-idx="0">Previous</a>
                    </li>
                    {this.getPaginationSlider()}
                        <li className={classnames("paginate_button next",{'disabled':!this.state.nextEnabled})} id="example1_next">
                        <a  aria-controls="example1" data-dt-idx="7">Next</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>;
    }
}

export default Pagination;