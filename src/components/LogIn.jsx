import "./getIn.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LogIn() {
    return (<>
        <div className="">
            <div className="logo-get-in">PocketArt</div>
            <div className="what-to-do-get-in">Create an account</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button-get-in">
                    Log in
                </Button>
            </Form>
            <div className="note-get-in">Don't have an account? <span className="note-link-get-in">Register</span></div>
        </div>
    </>)
}

export default LogIn;