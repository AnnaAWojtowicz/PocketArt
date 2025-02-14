import "./quizModal.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const questionGen = ["Who created this art?", "What is the title of this art?", "When was this art created?", "What is the type of this art?", "What is the culture of this art?"];

function generateQuestion(max) {
    return Math.floor(Math.random() * (max + 1));
}


function QuizModal({ show, handleClose }) {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton data-bs-theme="dark">
                    <Modal.Title>Hi NAME!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {questionGen[generateQuestion(4)]}
                </Modal.Body>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Write your awsome answer here:</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="submit-todays-quiz-modal" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>


        </>
    );

}

export default QuizModal;