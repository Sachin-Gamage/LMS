import * as React from 'react';
import './top-navigation-bar.scss';


export default class TopNavigationBar extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <i className="fab fa-hornbill"></i>Portal
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <i className='fa fa-bars'></i>
                    </a>
                    <div className="navbar-custom-menu">
                        {/* <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                    <span className="hidden-xs">Retailer X</span></a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/car.svg" className="img-circle" alt="User Image" />

                                        <p>
                                            Retailer X
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </header>
        )
    }
}
