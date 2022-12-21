import React, {Component} from 'react';
import ContactService from "../../services/ContactService"
import './List.css';

interface IState{
    contacts: any[]
}

class ListContacts extends Component<any, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        ContactService.getContacts()
            .then((res) => {
                const contacts = res.data;
                this.setState({contacts});
            });
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(
                    contact =>
                        <div className="ContentBlock">
                            <div className="ContentTitle">
                                {contact.phone}
                            </div>
                            <div className="ContentDescription">
                                {contact.address}
                            </div>
                        </div>
                )}
            </div>
        );
    }
}

export default ListContacts;