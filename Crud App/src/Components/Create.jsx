import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';


function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66045d262ca9478ea17dde2f.mockapi.io/crud-app', {
            name: name, email: email,
        })
            .then(() => {
                navigate('/read')
            })
    }
    const navigate = useNavigate();
    return (
        <>
            <h2>Create</h2>
            <Link to={'/read'}>
                <Button variant="primary" type="submit">Read</Button>
            </Link>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    <br />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        </>

    )
}

export default Create;