import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navBar.css';

function NavBar() {
    return (
        <Navbar className="nav-container">

            <span id="logo-nav">PocketArt</span>

            <Form className="d-flex align-items-baseline">
                <Form.Control
                    type="text"
                    placeholder=""
                    className="mr-sm-2 search-field"
                />
                <Button type="submit" id="basic-addon2"><span class="material-symbols-outlined search-button">
                    search
                </span></Button>

            </Form>
        </Navbar>
    );
}

export default NavBar;