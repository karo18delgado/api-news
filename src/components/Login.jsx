import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const admin = {email:'caro@correo.com', name:'caro', password:'1234'};

export default function Login({setUser}) {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.email === admin.email && input.password === admin.password) {
            alert ('Logueo exitoso 👍' + admin.name);
            setUser(admin.name)
        } else alert ('Datos Incorrectos!');
    }
    return (
        <Form onSubmit={handleSubmit} className="card mx-auto p-5 my-5" style={{ width: '500px', height:'400px'}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="pb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>
    )
}
