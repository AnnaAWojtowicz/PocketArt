import "./afterCreateAccountModal.css";
import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function AfterCreateAccountModal({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton data-bs-theme="dark">
                    <Modal.Title>Hi NAME!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>You're all set! </div>
                    <br></br>
                    <div>Just one more step—sign in to your account, and you're ready to dive into the world of art!</div></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="btn-after-create-account">
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AfterCreateAccountModal;