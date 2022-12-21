import React from 'react';
import axios from 'axios';
import {Button, Form} from "react-bootstrap";

interface IState {
    username: string,
    email: string
}

class Login extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            email: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleName = (event:any) => {
        this.setState({username: event.target.value})
    }

    handleEmail = (event:any) => {
        this.setState({email: event.target.value})
    }

    handleSubmit = (event:any) => {
        axios.post(`http://localhost:8080/email`, {
            emailAddress : `${this.state.email}`,
            subjectName : `${this.state.username}`
        })
    }

    render() {
        return (
            <Form className="ContentBlock">
                <Form.Group className="ContentTitle mb-3" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Введите адрес электронной почты" value={this.state.email} onChange={this.handleEmail}/>
                </Form.Group>

                <Form.Group className="ContentTitle mb-3" controlId="formBasicName">
                    <Form.Label>ФИО</Form.Label>
                    <Form.Control size="lg" type="name" placeholder="Введите свое имя" value={this.state.username} onChange={this.handleName}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Подтвердить
                </Button>
            </Form>
        );
    }
}

export default Login;