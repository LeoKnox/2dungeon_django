import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewRoomForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        description: "",
        width: 0,
        height: 0,
        floor: ""
    };

    componentDidMount() {
        if ( this.props.room) {
            const { pk, name, description, width, height, floor } = this.props.room;
            this.setState({ pk, name, description, width, height, floor });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createRoom = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editRoom = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).thend(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.room ? this.editRoom : this.createRoom}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.description)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="width">Width:</Label>
                    <Input
                        type="number"
                        name="width"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.width)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="height">Height:</Label>
                    <Input
                        type="number"
                        name="height"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.height)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="floor">Floor:</Label>
                    <Input
                        type="text"
                        name="floor"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.floor)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewRoomForm;