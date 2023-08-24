"use client"
/* make a form only having user id and submit which fetches localhost:3001/login with {id} nextjs*/
import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const [id, setId] = useState('');
    const handleSubmit = (e) => {
        /* fetches localhost:3001/login with {id}*/
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        })
            .then((response) => response.json())
            .then(r => {
                console.log(r.token);
                window.localStorage.setItem('token', r.token);
                window.localStorage.setItem('id', id);
            })
    }
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter User ID" onChange={(e) => setId(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
    
    export default Login;