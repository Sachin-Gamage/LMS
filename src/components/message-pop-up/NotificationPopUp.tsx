import * as React from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer,NotificationManager} from 'react-notifications'


interface INotificationPopUpProps{
  messageTitle?:string,
  message:string,
  messageLevel:string
}
class NotificationPopUp extends React.Component<INotificationPopUpProps,{}> {

  componentDidMount(){
    this.createNotification()
  }


  private createNotification(){
    NotificationManager.remove(this);
      switch (this.props.messageLevel) {
        case 'info':
          NotificationManager.info(this.props.messageTitle,this.props.message,1000);
          break;
        case 'success':
          NotificationManager.success(this.props.messageTitle,this.props.message,1000);
          break;
        case 'warning':
          NotificationManager.warning(this.props.messageTitle,this.props.message,1000);
          break;
        case 'error':
          NotificationManager.error(this.props.messageTitle,this.props.message,1000);
          break;
        default:
          break;
      }
  }
  
    render() {
      return (
        <NotificationContainer/>
      );
    }
  }
  
  export default NotificationPopUp;