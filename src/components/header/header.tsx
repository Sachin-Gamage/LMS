import * as React from "react";

interface IHeaderProps{
    title:string
}
class Header extends React.Component<IHeaderProps,{}> {
    public render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
