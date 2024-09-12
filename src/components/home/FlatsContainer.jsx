import { useEffect, useState } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";

const FlatsContainer = () => {
    const [flats, setFlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlats = async () => {
            const token = localStorage.getItem("authToken"); 

            try {
                const response = await fetch("http://localhost:4001/flats", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, 
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch flats");
                }

                const data = await response.json();
                setFlats(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchFlats();
    }, []);

    if (loading) return <p>Loading flats...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <br />
            <br />
            <h1 className="display-4">My Flats</h1>
            <br />
            {flats.length === 0 ? (
                <p>There are no houses currently associated with your name.</p>
            ) : (
                <ListGroup as="ol" numbered>
                    {flats.map((flat) => (
                        <ListGroup.Item
                            action
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={flat.id}
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{flat.name}</div>
                                {flat.description && <p>{flat.description}</p>}
                            </div>
                            <Button variant="link">View More</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            <br />
            <br />
        </Container>
    );
};
export default FlatsContainer;