import "./getIn.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterCreateAccountModal from "./AfterCreateAccountModal.jsx";


// it starts with WelcomeModal: depending on which button is clicked, it will show either CreateAccount or LogIn
// need to create component that changes depending on what was clicked in WelcomeModal
export default function GetInForm() {

    const [showEntireForm, setShowEntireForm] = useState(false);



    function handleFormChange(e) {
        setShowEntireForm(e);
    }


    return (
        <>
            <div className="">
                <div>
                    <button onClick={() => handleFormChange(false)}>sign in</button>
                    <button onClick={() => handleFormChange(true)}>new user</button>
                </div>
                <div className="logo-get-in">PocketArt</div>
                <div className="what-to-do-get-in">Create an account</div>
                <Form>
                    {showEntireForm === true ? (<Form.Group className="mb-3" controlId="formBasicPassword">
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
                    <Button variant="primary" type="submit" className="submit-button-get-in" onClick="">
                        Submit
                    </Button>
                </Form>
                {showEntireForm === true ? (<div className="note-get-in">Already have an account? <span className="note-link-get-in">Sign in</span></div>) : (<div className="note-get-in">Don't have an account? <span className="note-link-get-in">Register</span></div>)}


                {/* <AfterCreateAccountModal show={show} handleClose={handleClose} /> */}
            </div>
        </>
    )
}