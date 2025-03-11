import "./getIn.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterCreateAccountModal from "./AfterCreateAccountModal.jsx";



export default function GetInForm() {

    const [showEntireForm, setShowEntireForm] = useState(false);

    function handleFormChange(e) {
        setShowEntireForm(e);
    }

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
                <div>
                    <button onClick={() => handleFormChange(false)}>sign in</button>
                    <button onClick={() => handleFormChange(true)}>new user</button>
                </div>
                <div className="logo-get-in">PocketArt</div>
                {showEntireForm ? (
                    <div className="what-to-do-get-in">Create an account</div>
                ) : (
                    <div className="what-to-do-get-in">Log in</div>
                )}

                <Form onSubmit={showEntireForm ? handleSubmit : undefined}>
                    {showEntireForm ? (<Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>) : ""}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-button-get-in" onClick={showEntireForm ? handleShow : undefined}>
                        Submit
                    </Button>
                </Form>
                {showEntireForm ? (
                    <div className="note-get-in">Already have an account? <button className="note-link-get-in" onClick={() => handleFormChange(false)}>Sign in</button></div>
                ) : (
                    <div className="note-get-in">Don't have an account? <button className="note-link-get-in" onClick={() => handleFormChange(true)}>Register</button></div>
                )}


                <AfterCreateAccountModal show={show} handleClose={handleClose} />
            </div>
        </>
    )
}