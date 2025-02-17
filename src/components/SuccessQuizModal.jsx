import "../quizModal.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SuccessQuizModal() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleClose = () => setShowSuccessModal(false);
    const handleShow = () => setShowSuccessModal(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Oh wow! You did it!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have now SO MANY points! You're a quiz master! Keep it up!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SuccessQuizModal;