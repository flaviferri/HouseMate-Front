import {Badge, Button, Card, Container, ListGroup} from "react-bootstrap";


const flatsDataHouses = [
    {
        "title": "House 1",
        "description": "House Description 1",
        "tasks": 5
    },
    {
        "title": "House 2",
        "description": "House Description 2",
        "tasks": 6
    },
    {
        "title": "House 3",
        "description": "House Description 4",
        "tasks": 7
    }
]

const FlatsContainer = () => {
    return (
        <Container>
            <br/>
            <br/>
            <h1 className="display-4">My Flats</h1>
            <br/>
            <ListGroup as="ol" numbered>
                {flatsDataHouses
                    .map((variant) => (
                        <ListGroup.Item action
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{variant.title}</div>
                                {variant.description}
                            </div>
                            <div className="position-relative">
                                <Badge bg="primary" pill className="">
                                    {variant.tasks}
                                </Badge>
                            </div>
                            <Button variant="link">View More</Button>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
            <br/>
            <br/>
        </Container>
    )
}
export default FlatsContainer