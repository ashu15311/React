import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    }, [])

    const handleUpdate = ((e) => {
        e.preventDefault();
        axios.put(`https://66045d262ca9478ea17dde2f.mockapi.io/crud-app/${id}`, {
            name: name,
            email: email
        }).then(() => {
            navigate('/read');
        })
    })

    return (
        <div>
            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    <br />
                </Form.Group>
                <Button variant="primary" type="submit">Update</Button>
            </Form>

        </div>
    )
}

export default Update