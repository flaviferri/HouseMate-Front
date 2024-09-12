import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddFlatForm = () => {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [floor, setFloor] = useState('');
    const [postCode, setPostCode] = useState('');
    const [rooms, setRooms] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:4001/flat/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name,
                    street,
                    number,
                    floor,
                    postCode,
                    rooms,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al crear la casa');
            }

            navigate('/'); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Agregar Nueva Casa</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formNumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formFloor">
                    <Form.Label>Flat number</Form.Label>
                    <Form.Control
                        type="number"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPostCode">
                    <Form.Label>PostCode</Form.Label>
                    <Form.Control
                        type="number"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formRooms">
                    <Form.Label>Number of rooms</Form.Label>
                    <Form.Control
                        type="number"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        required
                    />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar'}
                </Button>
            </Form>
        </Container>
    );
};


export default AddFlatForm;