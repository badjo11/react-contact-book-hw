import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const Update = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} type="text" onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder="Enter title" />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control value={phone} type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter title" />
                            <Form.Label>Image</Form.Label>
                            <Form.Control value={image} type="text" onChange={(e) => { setImage(e.target.value) }} placeholder="Enter title" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Update;