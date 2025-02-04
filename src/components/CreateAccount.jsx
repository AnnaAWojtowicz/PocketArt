import "./getIn.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateAccount() {
    return (<>
        <div className="">
            <div className="logo-get-in">PocketArt</div>
            <div className="what-to-do-get-in">Create an account</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="note-get-in">Already have an account? <span className="note-link-get-in">Sign in</span></div>
        </div>
    </>)
}

export default CreateAccount;