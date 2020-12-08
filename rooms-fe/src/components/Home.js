import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RoomList from "./RoomList";
import NewRoomModal from "./NewRoomModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
    state = {
        rooms: []
    };

    componentDidMount() {
        this.resetState();
    }

    getRooms = () => {
        axios.get(API_URL).then(res => this.setState({ rooms: res.data }));
    }

    resetState = () => {
        this.getRooms();
    };

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <RoomList
                            rooms={this.state.rooms}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewRoomModal create={true} resetState={this.resetState} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;