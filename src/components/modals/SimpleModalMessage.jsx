import Modal from "react-bootstrap/Modal";
import React from "react";
import {Button} from "react-bootstrap";

function SimpleModalMessage(
    props,
) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    House Mate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.text}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SimpleModalMessage;