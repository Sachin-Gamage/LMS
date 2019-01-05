import * as React from 'react';
import {Link} from 'react-router-dom';

interface ISideBarProps{
    id: string;
    name: string;
    icon: string;
    url: string;
}
class SideBarItem extends React.Component<ISideBarProps,{}>{

    private getSubMenuItem=()=>{
       return(
           <Link to={this.props.url}><i className={this.props.icon}></i>{this.props.name}</Link>
       );
    }
    render(){
        return(      
            <li>
                {this.getSubMenuItem()}
            </li>
        );
    }
}

export default SideBarItem;