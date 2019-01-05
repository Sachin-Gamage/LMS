import * as React from 'react';
import TopNavigationBar from '../components/top-navigation-bar/top-navigation-bar';
import SideBar from '../components/sidebar-navigation/sideBar';
import RouteContainer from './AppContainer';
import { getMenuItems } from '../util/menuItems';
// import {Switch,Route} from 'react-router-dom'
import NotificationPopUp from '../components/message-pop-up/NotificationPopUp';
import {connect} from 'react-redux';
import { resetPopups } from '../actions/popUpActions';


class Container extends React.Component<any,any>{
    private menu = getMenuItems();

    componentDidMount(){
        this.props.dispatch(resetPopups());
    }    
    public render(){
        return(
            <div>
                {/* <Loader loaded={this.props.loader? !this.props.loader.isLoading : true}></Loader> */}
                <TopNavigationBar />
                <SideBar menu={this.menu} userName={""} />
                <div className="content-wrapper">
                    <div className="content-header">
                        {/* <Route exact path='/' render={() => (<DashboardHome />)} />
                        <Switch>
                            {
                                DashBoardRoutes.map((route, key) => {
                                    return (<Route exact path={route.path} key={key} render={() => (<route.component/>)} />);
                                })
                            }
                        </Switch> */}
                        <RouteContainer/>
                    </div>
                </div>
                {
                    this.props.popUpstate && 
                    <NotificationPopUp message={this.props.popUpstate.message} messageLevel={this.props.popUpstate.level} messageTitle = {this.props.popUpstate.title}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    popUpstate: state.popup.popUpStates
});

export default connect(mapStateToProps)(Container);