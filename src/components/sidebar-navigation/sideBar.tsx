import * as React from 'react';
import { IMenu } from '../../util/menuItems';
import SideBarItem from './side-bar-item/sideBarItem';
import {Link} from 'react-router-dom';
import * as classnames from 'classnames';
import './sideBar.scss';


interface ISideBarProps{
    menu:IMenu;
    userName:string;
}

interface ISideBarStates{
    activeMenu:string;
}

class SideBar extends React.Component<ISideBarProps,ISideBarStates> {


    constructor(props){
        super(props);
        this.state = {
            activeMenu:''
        }
    }

    componentDidMount(){
        console.log('Props Menu',this.props.menu);
    }
    private renderMenuItems = () =>{
        return this.props.menu.items.map((menuItem,index) => {
            let menuItemKey = `menu-${index}`
            if(menuItem.children.length < 1){
                return(
                    <li id = {menuItem.url} className={classnames({active:this.state.activeMenu === menuItem.url})}>
                        <Link to={menuItem.url} key={menuItemKey} onClick={() => {this.setState({activeMenu:menuItem.url})}}>
                            <i className={menuItem.icon}></i> <span>{menuItem.name}</span>
                        </Link>
                    </li>
                );
            }else{
                return(
                    <li className={classnames("treeview",{active:this.state.activeMenu === menuItem.url})}>
                        <Link to="#" key={menuItemKey} onClick={() => {this.setState({activeMenu:menuItem.url})}}>
                            <i className={menuItem.icon}></i>
                            <span>{menuItem.name}</span>
                        </Link>
                        <ul className="treeview-menu">
                            {this.renderSideBarItems(menuItem)}
                        </ul>
                    </li>
                );
            }
        });
    }

    private renderSideBarItems = (menuItem) => {
        return menuItem.children.map((menu,index) => {
            let sideBarKey = `side-${index}`
            return (
                <SideBarItem id={menu.id} name={menu.name} icon={menu.icon} url={menu.url} key={sideBarKey} />
            );
        });
    }
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left info">
                            <p>{this.props.userName}</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        {this.renderMenuItems()}
                    </ul>   
                </section>
            </aside>
        )
    }
}

export default SideBar;