import * as React from 'react';
import { DVD } from '../../../modals/dvd';
import { openPopup } from '../../../actions/popUpActions';
import { connect } from "react-redux";
import { addDvd } from '../../../actions/dvdActions';


interface IAdddvdStates {
    ISBN?: string;
    title?: string;
    sector?: string;
    burrowDateAndTime?: string;
    reader?: string;
    type?: string;
    pubDate?: string;
    producer?: string;
    languagesAvailable?: string[];
    subsAvailablae?: string[];
    actors?: string[];  
}

class AddDvd extends React.Component<any, IAdddvdStates>{

    constructor(props) {
        super(props);
        this.state = {
            ISBN: '',
            title: '',
            sector: '',
            burrowDateAndTime: '',
            reader: '',
            type: '',
            pubDate: '',
            producer: '',
            languagesAvailable: [],
            subsAvailablae: [],
            actors: [], 
        }
    }

    openPopups() {
        if (this.props.success) {
            this.props.dispatch(openPopup('Added book successfully', 'success'));
        }

        if (this.props.err) {
            this.props.dispatch(openPopup('Book adding fail', 'error'));
        }
    }

    private handleOnSubmit() {
        let dvd:DVD = new DVD();

        dvd.$ISBN = this.state.ISBN;
        dvd.$title = this.state.title;
        dvd.$sector = this.state.sector;
        dvd.$burrowDateAndTime = this.state.burrowDateAndTime;
        dvd.$type = this.state.type;
        dvd.$pubDate = this.state.pubDate;
        dvd.$producer = this.state.producer;
        dvd.$languagesAvailable = this.state.languagesAvailable;
        dvd.$subsAvailablae = this.state.subsAvailablae;
        dvd.$actors = this.state.actors;
        
        this.props.dispatch(addDvd(dvd));

    }

    private addArrays = (element) =>{
        const array = [];
        array.push(element);

        return array;
    }

    render(){
        this.openPopups();
        return(
            <div>
                <div className="row">
                    <div className="col-25">
                        <label >ISBN</label>
                    </div>
                    <div className="col-75">
                        <input type="text"  placeholder="ISBN" onChange={(e) => { this.setState({ ISBN: e.target.value }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Title of the Book</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Title" onChange={(e) => { this.setState({ title: e.target.value }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Sector</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Sector" onChange={(e) => { this.setState({ sector: e.target.value }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Available Languages</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Available Languages" onChange={(e) => { this.setState({ languagesAvailable: this.addArrays(e.target.value) }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Available SubTitles</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Available SubTitles" onChange={(e) => { this.setState({ subsAvailablae: this.addArrays(e.target.value) }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Producer</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Producer" onChange={(e) => { this.setState({ producer: e.target.value }) }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Actors</label>
                    </div>
                    <div className="col-75">
                        <input type="text"   placeholder="Actors" onChange={(e) => { this.setState({ actors: this.addArrays(e.target.value) }) }}/>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Add Item" onClick={() => {this.handleOnSubmit()}}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    success: state.book.success,
    err: state.book.err
});

export default connect(mapStateToProps)(AddDvd);