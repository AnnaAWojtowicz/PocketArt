import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./welcomeModal.css";
import ModalSmallButtons from './ModalSmallButtons';

function WelcomeModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='welcome-modal'>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Hi! Welcome to Today's Quiz!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalSmallButtons />
            </Modal.Body>
            <Modal.Footer>
                Please note: Only registered and signed-in users are eligible to collect quiz points.
            </Modal.Footer>
        </Modal>
    );
}

export default WelcomeModal;