import "./quizModal.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SuccessQuizModal({ show, handleClose }) {


    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton data-bs-theme="dark">
                    <Modal.Title>Oh wow! You did it!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have now SO MANY points! You're a quiz master! Keep it up!
                </Modal.Body>
                <Modal.Footer className="modal-two-buttons">
                    <Button variant="primary" onClick={handleClose}>
                        Points Stats
                    </Button>
                    <Button variant="primary">Home</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SuccessQuizModal;