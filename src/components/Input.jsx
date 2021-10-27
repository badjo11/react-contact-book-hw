import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Input = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    return (
        <div style={{ width: 500, margin: "10px auto" }}>
            <Form onSubmit={(e) => {
                e.preventDefault()
                props.addCards(name, phone, image)
                setName("")
                setPhone("")
                setImage("")
            }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter title" />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={phone} type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter title" />
                    <Form.Label>Image</Form.Label>
                    <Form.Control value={image} type="text" onChange={(e) => { setImage(e.target.value) }} placeholder="Enter title" />
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
        </div>
    );
};

export default Input;

