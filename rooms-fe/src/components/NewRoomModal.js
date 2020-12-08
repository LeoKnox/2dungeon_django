import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewRoomForm from "./NewRoomForm";

class NewRoomModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Editing Room";
        var button = <Button onClick={this.toggle}>Edit</Button>
        if(create) {
            tite = "Creating New Room";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create New
                </Button>
            );
        }
        
        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewRoomForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            room={this.props.room}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewRoomModal;