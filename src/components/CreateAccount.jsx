import "./getIn.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterCreateAccountModal from "./AfterCreateAccountModal.jsx";

function CreateAccount() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleShow();
    };

    return (
        <>
            <div className="">
                <div className="logo-get-in">PocketArt</div>
                <div className="what-to-do-get-in">Create an account</div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-button-get-in" onClick={handleShow}>
                        Submit
                    </Button>
                </Form>
                <div className="note-get-in">Already have an account? <span className="note-link-get-in">Sign in</span></div>

                <AfterCreateAccountModal show={show} handleClose={handleClose} />
            </div>
        </>
    )
}

export default CreateAccount;