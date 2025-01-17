import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Nav.css';

function Nav() {
    return (
        <Navbar className="nav-container">
            <span id="logo-nav">PocketArt</span>
            <Form id='search-form-nav'>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 search-input"

                        />
                        <InputGroup.Text>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </InputGroup.Text>
                        {/* <Button type="submit">Submit</Button> */}
                    </Col>
                </Row>
            </Form>

        </Navbar>
    );
}

export default Nav;