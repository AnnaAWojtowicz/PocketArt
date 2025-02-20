import "./quizModal.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FailQuizModal({ show, handleClose, handleShowQuizModal }) {

    const handleTryAgainQuiz = () => {
        handleClose();
        handleShowQuizModal();
    };


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton data-bs-theme="dark">
                    <Modal.Title>Oh snap!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    No worries! Do you want to try again?
                </Modal.Body>
                <Modal.Footer className="modal-two-buttons">
                    <Button variant="primary" onClick={handleTryAgainQuiz}>
                        Yes, please!
                    </Button>
                    <Button variant="primary" onClick={handleClose}>No, thanks!</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FailQuizModal;