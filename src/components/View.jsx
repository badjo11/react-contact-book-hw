import React, { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';

const View = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [idOfItem, setIdOfItem] = useState(-1)
    const [nameEdit, setNameEdit] = useState("")
    const [phoneEdit, setPhoneEdit] = useState("")
    const [imageEdit, setImageEdit] = useState("")
    function Editing(index) {
        setNameEdit(props.cards[index].name)
        setPhoneEdit(props.cards[index].phone)
        setImageEdit(props.cards[index].image)
    }
    return (
        <div className="container d-flex flex-wrap justify-content-between">
            {
                props.cards.length ?


                    props.cards.map((item, index) => (
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.phone}
                                </Card.Text>
                                <Button variant="danger" onClick={() => {
                                    props.deleteCards(item.id)
                                }}>Delete</Button>
                                <Button variant="primary" onClick={() => {
                                    handleShow()
                                    setIdOfItem(index)
                                    Editing(index)
                                }}>
                                    Launch demo modal
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                    : (
                        <h2>Пока что у вас нету тасков</h2>
                    )

            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={nameEdit} type="text" onChange={(e) => {
                                setNameEdit(e.target.value)
                            }} placeholder="Enter title" />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control value={phoneEdit} type="text" onChange={(e) => { setPhoneEdit(e.target.value) }} placeholder="Enter title" />
                            <Form.Label>Image</Form.Label>
                            <Form.Control value={imageEdit} type="text" onChange={(e) => { setImageEdit(e.target.value) }} placeholder="Enter title" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        props.updateCards(idOfItem, [nameEdit, phoneEdit, imageEdit])
                        handleClose()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default View